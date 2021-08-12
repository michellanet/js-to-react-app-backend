"use strict";

// Libraries
const { db } = require("../../db/db-config");
const jwt = require("jsonwebtoken");
const Mailer = require("../email/nodemailer").nodemailer_transporter;
const { formatPhone } = require("../../functions/functions");
const _ = require("lodash");

// Environment variables
const SITE_BASE = process.env.SITE_BASE;
const ADMIN_EMAIL = process.env.TASTTLIG_ADMIN_EMAIL;
const EMAIL_SECRET = process.env.EMAIL_SECRET;

// Get user by ID helper function
const getUserByIdOrEmail = async (idOrEmail) => {
  const id = Number.isInteger(idOrEmail) ? idOrEmail : null;
  const email = !Number.isInteger(idOrEmail) ? idOrEmail : null;
  return await db
    .select(
      "talent_users.*",
      "client_details.*",
      db.raw("ARRAY_AGG(roles.role) as role"),
      db.raw("ARRAY_AGG(user_skillset.skill_title) as skillset")
    )
    .from("talent_users")
    .leftJoin(
      "client_details",
      "talent_users.talent_user_id",
      "client_details.user_id"
    )
    .leftJoin(
      "user_role_lookup",
      "talent_users.talent_user_id",
      "user_role_lookup.user_id"
    )
    .leftJoin("roles", "user_role_lookup.role_code", "roles.role_code")
    .leftJoin(
      "user_skillset",
      "talent_users.talent_user_id",
      "user_skillset.user_id"
    )
    .groupBy("talent_users.talent_user_id")
    .groupBy("client_details.client_id")
    .having("talent_users.talent_user_id", "=", id)
    .orHaving("talent_users.email", "=", email)
    .first()
    .then((value) => {
      if (!value) {
        return { success: false, message: "No user found." };
      }
      return { success: true, user: value };
    })
    .catch((error) => {
      return { success: false, message: error };
    });
};

// Update user profile helper function
const createUserInfo = async (user) => {
  try {
    const talentDetails = await talent_details(user);
    const clientDetails = await client_details(user);
    if (talentDetails.success || clientDetails.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const client_details = async (new_user) => {
  if (new_user.role !== "client") {
    return;
  }
  try {
    /* let details = {user_id: new_user.id,};
    if(new_user.client_phone_number){details.client_phone_number=new_user?.client_phone_number;}
    if(new_user.client_business_name){details.client_business_name=new_user?.client_business_name;}
    if(new_user.client_description){details.client_description=new_user?.client_description;}
    if(new_user.client_postal_code){details.client_postal_code=new_user?.client_postal_code;}
    if(new_user.client_business_unit){details.client_business_unit=new_user?.client_business_unit;}
    if(new_user.client_street_number){details.client_street_number=new_user?.client_street_number;}
    if(new_user.client_street_name){details.client_street_name=new_user?.client_street_name;}
    if(new_user.client_city){details.client_city=new_user?.client_city;}
    if(new_user.client_state){details.client_state=new_user?.client_state;}
    details.is_client_business_registered=new_user?.is_client_business_registered;
    if(new_user.client_country){details.client_country=new_user?.client_country;}
    if(new_user.client_logo_link[0]){details.client_logo_link=new_user?.client_logo_link[0];}
    if(new_user.client_registration_date){details.client_registration_date=new_user?.client_registration_date;}
    if(new_user.client_date_updated){details.client_date_updated=new_user?.client_date_updated;} */

    const details = {
      user_id: new_user.id,
      client_phone_number: new_user?.client_phone_number,
      client_business_name: new_user?.client_business_name,
      client_description: new_user?.client_description,
      client_postal_code: new_user?.client_postal_code,
      client_business_unit: new_user?.client_business_unit,
      client_street_number: new_user?.client_street_number,
      client_street_name: new_user?.client_street_name,
      client_city: new_user?.client_city,
      client_state: new_user?.client_state,
      is_client_business_registered: new_user?.is_client_business_registered,
      client_country: new_user?.client_country,
      client_logo_link: new_user?.client_logo_link[0],
      client_registration_date: new_user?.client_registration_date,
      client_date_updated: new_user?.client_date_updated,
    };
    const new_db_user = await db("client_details")
      .insert(details)
      .returning("*");
    return { success: true };
  } catch (error) {
    return { success: false, data: error.message };
  }
};
const getSkillsInfo = async () => {
  try {
    const skillInfo = await db("skillset").select("*");
    return { success: true, skillInfo: skillInfo };
  } catch (error) {
    return { success: false, error: error };
  }
};

const getUserSkillsInfo = async (user_id) => {
  try {
    const skillInfo = await db("user_skillset").select().where({
      user_id: user_id,
    });
    return { success: true, skillInfo: skillInfo };
  } catch (error) {
    return { success: false, error: error };
  }
};

const addSkill = async (user_id, skill) => {
  try {
    const new_skillset = await db("user_skillset")
      .insert({
        user_id: user_id,
        skill_title: skill.skill_title,
        skill_category: skill.skill_category,
      })
      .returning("*");
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};

const updateSkill = async (user_id, skill) => {
  try {
    const new_skillset = await db("user_skillset")
      .where({
        user_id: user_id,
        user_skill_id: skill.user_skill_id,
      })
      .update(skill)
      .returning("*");
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};

const deleteSkill = async (user_id, skill) => {
  try {
    const new_skillset = await db("user_skillset")
      .where({
        user_id: user_id,
        user_skill_id: skill.user_skill_id,
      })
      .del()
      .returning("*");
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};
const talent_details = async (new_user) => {
  if (new_user.role !== "talent") {
    return;
  }
  try {
    /* new_user?.technology &&
      new_user?.technology.length > 0 &&
      new_user?.technology.map(async (skill) => {
        const getSkill = await getSkillInfo(skill);
        if (getSkill.success) {
          await addSkill(new_user.id, getSkill);
        }
      });
    new_user?.marketing &&
      new_user?.marketing.length > 0 &&
      new_user?.marketing.map(async (skill) => {
        const getSkill = await getSkillInfo(skill);
        if (getSkill.success) {
          await addSkill(new_user.id, getSkill);
        }
      });
    new_user?.finance &&
      new_user?.finance.length > 0 &&
      new_user?.finance.map(async (skill) => {
        const getSkill = await getSkillInfo(skill);
        if (getSkill.success) {
          await addSkill(new_user.id, getSkill);
        }
      }); */

    const userUpdate = {
      linkedin_link: new_user?.linkedin_link,
      phone_number: new_user?.phone_number,
      resume_link: new_user?.resume_link,
      portfolio_link: new_user?.portfolio_link,
      profile_image_link: new_user?.profile_image_link[0],
      updated_at_datetime: new Date(),
    };
    const new_db_user = await db("talent_users")
      .where("talent_user_id", new_user.id)
      .update(userUpdate)
      .returning("*");

    return { success: true };
  } catch (error) {
    return { success: false, data: error.message };
  }
};
const getNationalities = async (keyword) => {
  try {
    return await db("nationalities")
      .select("nationality")
      .having("nationality", "LIKE", keyword + "%")
      .returning("*")
      .then((value) => {
        return { success: true, details: value[0] };
      })
      .catch((reason) => {
        return { success: false, details: reason };
      });
  } catch (error) {
    return { success: false, message: error };
  }
};

// Save payment information helper function
const savePaymentInformation = async (db_user, banking_info) => {
  return await db.transaction(async (trx) => {
    let paymentInfo = {
      payment_type: banking_info.banking,
      user_id: db_user.tasttlig_user_id,
    };

    if (paymentInfo.payment_type === "Bank") {
      paymentInfo = {
        ...paymentInfo,
        bank_number: banking_info.bank_number,
        account_number: banking_info.account_number,
        institution_number: banking_info.institution_number,
        void_cheque: banking_info.void_cheque,
      };
    } else if (paymentInfo.payment_type === "Paypal") {
      paymentInfo = {
        ...paymentInfo,
        paypal_email: banking_info.paypal_email,
      };
    } else if (paymentInfo.payment_type === "Stripe") {
      paymentInfo = {
        ...paymentInfo,
        stripe_account_number: banking_info.stripe_account,
      };
    } else {
      paymentInfo = {
        ...paymentInfo,
        etransfer_email: banking_info.online_email,
      };
    }

    await trx("payment_info").where("user_id", db_user.tasttlig_user_id).del();

    return trx("payment_info").insert(paymentInfo).returning("*");
  });
};

// Update talent profile helper function
const updateTalent = async (user) => {
  try {
    user.role = "talent";
    const talentDetails = await talent_details(user);
    if (talentDetails.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

// Update client profile helper function
const updateClient = async (new_user) => {
  try {
    const details = {
      client_phone_number: new_user?.client_phone_number,
      client_business_name: new_user?.client_business_name,
      client_description: new_user?.client_description,
      client_postal_code: new_user?.client_postal_code,
      client_business_unit: new_user?.client_business_unit,
      client_street_number: new_user?.client_street_number,
      client_street_name: new_user?.client_street_name,
      client_city: new_user?.client_city,
      client_state: new_user?.client_state,
      is_client_business_registered: new_user?.is_client_business_registered,
      client_country: new_user?.client_country,
      client_logo_link: new_user?.client_logo_link[0],
      client_date_updated: new_user?.client_date_updated,
    };
    const new_db_user = await db("client_details")
      .where("user_id", new_user.id)
      .update(details)
      .returning("*");
    return { success: true };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

module.exports = {
  getUserByIdOrEmail,
  createUserInfo,
  getNationalities,
  client_details,
  talent_details,
  getSkillsInfo,
  addSkill,
  updateTalent,
  updateClient,
  getUserSkillsInfo,
  updateSkill,
  deleteSkill,
};

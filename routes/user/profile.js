"use strict";

// Libraries
const router = require("express").Router();
const token_service = require("../../services/authentication/token");
const user_profile_service = require("../../services/profile/user_profile");
const authenticate_user_service = require("../../services/authentication/authenticate_user");
const authentication_service = require("../../services/authentication/authenticate_user");

// GET user by ID
router.get("/user", token_service.authenticateToken, async (req, res) => {
  const response = await user_profile_service.getUserByIdOrEmail(req.user.id);

  if (!response.success) {
    return res.status(403).json({
      success: false,
      message: response.message,
    });
  }

  res.status(200).json({
    success: true,
    user: response.user,
  });
});

router.put("/user/update-client/:id", async (req, res) => {
  try {
    const user = {
      id: req.params.id,
      ...req.body,
    };

    const response = await user_profile_service.updateClient(user);

    if (response.success) {
      res.status(200).json({
        success: true,
        user: response,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: response,
      });
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
});

router.put("/user/update-talent/:id", async (req, res) => {
  try {
    const user = {
      id: req.params.id,
      ...req.body,
    };

    const response = await user_profile_service.updateTalent(user);

    if (response.success) {
      res.status(200).json({
        success: true,
        user: response,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: response,
      });
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
});

// get nationalities for user

router.get("/user/nationalities", async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const response = await user_profile_service.getNationalities(keyword);
    if (response.success) {
      res.status(200).send(response);
    } else {
      return res.status(401).json({
        success: false,
        message: "Email already exists.",
      });
    }
  } catch (error) {}
});

// // update user info for passport
//
router.put(
  "/user/user-info/:id",
  token_service.authenticateToken,
  async (req, res) => {
    try {
      const user_details_from_db =
        await user_profile_service.getUserByIdOrEmail(req.user.id);

      if (!user_details_from_db.success) {
        return res.status(403).json({
          success: false,
          message: user_details_from_db.message,
        });
      }

      const user_info = {
        id: req.user.id,
        ...req.body,
      };

      const response = await user_profile_service.createUserInfo(user_info);
      return res.send(response);
    } catch (error) {
      res.send({
        success: false,
        message: "Error.",
        response: error,
      });
    }
  }
);

// GET user by email
router.get("/user/check-email/:email", async (req, res) => {
  try {
    const result = await user_profile_service.getUserByIdOrEmail(
      req.params.email
    );

    if (result.success) {
      const {
        success,
        user: { tasttlig_user_id, email },
      } = result;

      return res.send({ success, user: { tasttlig_user_id, email } });
    } else {
      return res.send({ success: false });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});

// PUT payment information from user
router.put("/user/updatePaymentInfo", async (req, res) => {
  try {
    const db_user = await user_profile_service.getUserByIdOrEmail(
      req.body.email
    );

    if (!db_user.success) {
      return res.status(403).json({
        success: false,
        message: "User does not exist.",
      });
    }

    const response = await user_profile_service.savePaymentInformation(
      db_user.user,
      req.body
    );

    res.send(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});

router.post(
  "/user/add-skill/:id",
  token_service.authenticateToken,
  async (req, res) => {
    try {
      const user_skill = await user_profile_service.addSkill(
        req.user.id,
        req.body
      );

      if (!user_skill.success) {
        return res.status(403).json({
          success: false,
          message: user_skill,
        });
      }
      return res.status(200).json({
        success: true,
        message: user_skill,
      });
    } catch (error) {
      res.send({
        success: false,
        response: error,
      });
    }
  }
);

router.put(
  "/user/update-skill/:id",
  token_service.authenticateToken,
  async (req, res) => {
    try {
      const user_skill = await user_profile_service.updateSkill(
        req.user.id,
        req.body
      );

      if (!user_skill.success) {
        return res.status(403).json({
          success: false,
          message: user_skill,
        });
      }
      return res.status(200).json({
        success: true,
        message: user_skill,
      });
    } catch (error) {
      res.send({
        success: false,
        response: error,
      });
    }
  }
);

router.post(
  "/user/remove-skill/:id",
  token_service.authenticateToken,
  async (req, res) => {
    try {
      const user_skill = await user_profile_service.deleteSkill(
        req.user.id,
        req.body
      );

      if (!user_skill.success) {
        return res.status(403).json({
          success: false,
          message: user_skill,
        });
      }
      return res.status(200).json({
        success: true,
        message: user_skill,
      });
    } catch (error) {
      res.send({
        success: false,
        response: error,
      });
    }
  }
);

router.get(
  "/get-user-skills/:id",
  token_service.authenticateToken,
  async (req, res) => {
    try {
      const skills = await user_profile_service.getUserSkillsInfo(req.user.id);
      if (!skills.success) {
        return res.status(403).json({
          success: false,
          message: skills,
        });
      }
      return res.status(200).json({
        success: true,
        message: skills,
      });
    } catch (error) {
      res.send({
        success: false,
        response: error,
      });
    }
  }
);

router.get("/get-skills", token_service.authenticateToken, async (req, res) => {
  try {
    const skills = await user_profile_service.getSkillsInfo();
    if (!skills.success) {
      return res.status(403).json({
        success: false,
        message: skills,
      });
    }
    return res.status(200).json({
      success: true,
      message: skills,
    });
  } catch (error) {
    res.send({
      success: false,
      response: error,
    });
  }
});

module.exports = router;

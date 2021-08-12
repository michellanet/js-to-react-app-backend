const { generateRandomString } = require("../../functions/functions");

exports.up = function (knex) {
  return knex.schema
    .createTable("skillset", (table) => {
      table.increments("skill_id").unsigned().primary();
      table.string("skill_title").notNullable();
      table.string("skill_code").notNullable().unique().index();
      table.string("skill_category").notNullable();
      table.text("skill_description");
    })
    .then(() => {
      return knex("skillset").insert([
        {
          skill_title: "Financial Consultation & Strategic Planning",
          skill_code: "FINANCE_CONSULTATION",
          skill_category: "finance",
          skill_description:
            "Talents in Financial Consultation & Strategic Planning",
        },
        {
          skill_title: "Operating Loans Advice",
          skill_code: "OPERATING_LOANS_ADVICE",
          skill_category: "finance",
          skill_description: "Talents in Operating Loans Advice",
        },
        {
          skill_title: "Startups Loans Advice",
          skill_code: "STARTUPS_LOANS_ADVICE",
          skill_category: "finance",
          skill_description: "Talents in Startups Loans Advice",
        },
        {
          skill_title: "Insurance Packages",
          skill_code: "INSURANCE_PACKAGES",
          skill_category: "finance",
          skill_description: "Talents in Insurance Packages",
        },
        {
          skill_title: "Technology Consultation & Strategic planning",
          skill_code: "TECHNOLOGY_CONSULTATION",
          skill_category: "technology",
          skill_description:
            "Talents in Technology Consultation & Strategic planning",
        },
        {
          skill_title: "Dynamic website development",
          skill_code: "DYNAMIC_WEBSITE_DEVELOPMENT",
          skill_category: "technology",
          skill_description: "Talents in Dynamic website development",
        },
        {
          skill_title: "Mobile Application Development",
          skill_code: "MOBILE_APPLICATION_DEVELOPMENT",
          skill_category: "technology",
          skill_description: "Talents in Mobile Application Development",
        },
        {
          skill_title: "Backlinks & Search Engine Optimization",
          skill_code: "BACKLINKS",
          skill_category: "technology",
          skill_description:
            "Talents in Backlinks & Search Engine Optimization",
        },
        {
          skill_title: "SEO",
          skill_code: "SEO",
          skill_category: "marketing",
          skill_description:
            "The process of improving the quality and quantity of website traffic to a website or a web page from search engine",
        },
        {
          skill_title: "Graphic Design",
          skill_code: "GRAPHIC_DESIGN",
          skill_category: "marketing",
          skill_description:
            "Help in building graphics for print, publish and electronic media",
        },
        {
          skill_title: "Digital Marketing",
          skill_code: "DIGITAL_MARKETING",
          skill_category: "marketing",
          skill_description:
            "Digital marketing campaign is a combinations of content marketing, Influencer marketing, campaign marketing, email marketing",
        },
        {
          skill_title: "Social Media",
          skill_code: "SOCIAL_MEDIA",
          skill_category: "marketing",
          skill_description:
            "The process of improving the quality and quantity of website traffic to a website or a web page from search engine",
        },
      ]);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("skillset");
};

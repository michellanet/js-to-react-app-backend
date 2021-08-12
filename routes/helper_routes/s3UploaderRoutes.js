"use strict";

// Libraries
const aws = require("aws-sdk");
const s3UploaderRouter = require("express").Router();
const aws_region = process.env.AWS_DEFAULT_REGION;

aws.config.update({
  region: aws_region,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const S3_BUCKET = process.env.S3_BUCKET;

s3UploaderRouter.post("/s3_signed_url", async (req, res) => {
  const s3 = new aws.S3();

  const fileName = req.body.fileName;
  const fileType = req.body.fileType;

  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrlPromise("putObject", params)
    .then(function (url) {
      const data = {
        signedRequest: url,
        url: `https://s3.${aws_region}.amazonaws.com/${S3_BUCKET}/${fileName}`,
      };
      res.json({ success: true, ...data });
    })
    .catch((error) => res.json({ success: false, error }));
});

module.exports = s3UploaderRouter;

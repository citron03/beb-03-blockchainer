const express = require("express");
const router = express.Router();
const { Post } = require("../models");

router.get("/count", async (req, res) => {
  let count = await Post.count({
    where: {},
  });
  try {
    res.status(200).json({
      message: "loading Successed",
      data: count,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Error: loading Failed",
    });
  }
});

module.exports = router;

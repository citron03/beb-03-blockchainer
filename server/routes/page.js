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

router.get("/list/:page", async (req, res) => {
  let contentperpage = 12; // 나중에 프론트와 협의후 수정
  let totalcontent = await Post.count({
    where: {},
  });

  await Post.findAll({
    where: {},
  });
  console.log(totalcontent);
  console.log(req.params.page);
  console.log("yes");
});
module.exports = router;

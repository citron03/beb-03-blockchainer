const express = require("express");
const router = express.Router();
const { Post } = require("../models");
const { Op } = require("sequelize");

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
    res.status(404).json({
      message: "Error: loading Failed",
    });
  }
});

router.get("/list/:page", async (req, res) => {
  let contentperpage = 4; // 여기를 수정해주세요!
  let totalcontent = await Post.count({
    where: {},
  });
  let viewdata = (req.params.page - 1) * contentperpage;

  let result = await Post.findAll({
    where: {
      id: {
        [Op.between]: [viewdata + 1, viewdata + contentperpage],
      },
    },
  });
  res.json({ message: "page loading Successed", data: result });
});

router.get("/content/:id", async (req, res) => {
  let content = await Post.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (content) {
    res.status(200).json({ message: "post loading Successed", data: content });
  } else {
    res.status(404).json({ message: "Error: post loading Failed" });
  }
});
module.exports = router;

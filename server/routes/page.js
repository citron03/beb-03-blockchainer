const express = require("express");
const router = express.Router();
const { Post } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
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
  let contentperpage = 12; // 한 페이지당 띄울 게시글 수
  let offset = contentperpage * (req.params.page - 1);

  let result = await Post.findAll({
    include: {
      model: User,
      attributes: ["username"],
    },
    offset: offset,
    limit: contentperpage,
  });
  try {
    res.status(200).json({ message: "page loading Successed", data: result });
  } catch (err) {
    console.log(err);
    res.stauts(404).json({
      message: "Error: page loading Failed",
    });
  }
});

router.get("/content/:id", async (req, res) => {
  let content = await Post.findOne({
    include: {
      model: Comment,
      attributes: ["id", "writer", "content", "createdAt", "updatedAt"],
    },
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

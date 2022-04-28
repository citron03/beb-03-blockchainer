const express = require("express");
const router = express.Router();
const { Post } = require("../models");

router.get("/newstpost", async (req, res) => {
  let data = await Post.findOne({
    order: [['id', 'DESC']],
    limit: 1
  });
  
  try {
    res.status(200).json({
      message: "loading Successed",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Error: loading Failed",
    });
  }
});

router.get("/rank", async (req, res) => {
  
  let count = await Post.count({
    where: {},
  });

  let data = await Post.findAll({
    order: [['id', 'DESC']],
    limit: 5
  });
  
  try {
    res.status(200).json({
      message: "loading Successed",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Error: loading Failed",
    });
  }
  
});

module.exports = router;

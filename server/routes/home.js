const express = require("express");
const router = express.Router();
const { Post } = require("../models");
const { Comment, sequelize } = require("../models");

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

  let data = await Post.findAll({
    attributes: [
      'id', 
      'title',
      [
        sequelize.literal(`(
          SELECT COUNT(Comments.id)
          FROM Comments
          WHERE Comments.post_id = Post.id
        )`),
        'count',
      ],
    ],
    order: [[sequelize.literal('count'), 'DESC']],
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

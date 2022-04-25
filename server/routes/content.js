const express = require("express");
const router = express.Router();
const { Post } = require("../models");

router.post("/posting", async (req, res) => {
  const newPost = await Post.create({
    writer: req.body.writer,
    title: req.body.title,
    content: req.body.content,
  });
  try {
    res.status(201).json({
      message: "Posting Successed",
      data: newPost,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error: Posting Failed",
    });
  }
});

router.patch("/update", async (req, res) => {
  await Post.update(
    { title: req.body.title, content: req.body.content },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  const updatedPost = await Post.findOne({
    where: {
      id: req.body.id,
    },
  });

  try {
    res.status(201).json({
      message: "update Successed",
      data: updatedPost,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error: update Failed",
    });
  }
});

router.post("/delete", async (req, res) => {
  await Post.destroy({
    where: {
      id: req.body.id,
    },
  }).then(
    res.status(200).json({
      message: "delete Successed",
    })
  );
});

module.exports = router;

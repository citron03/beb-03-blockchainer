const express = require("express");
const router = express.Router();
const { Comment } = require("../models");
const { User } = require("../models");

router.post("/posting", async (req, res) => {
  const newComment = await Comment.create({
    post_id: req.body.post_id,
    writer: req.body.writer,
    content: req.body.content,
  });
  try {
    res.status(201).json({
      message: "Commenting Successed",
      data: newComment,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error: Commenting Failed",
    });
  }
  const writer = await User.findOne({
    attributes: ["address"],
    where: {
      username: req.body.writer,
    },
  });
});

router.patch("/update", async (req, res) => {
  await Comment.update(
    { id: req.body.id, content: req.body.content },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  const updatedComment = await Comment.findOne({
    where: {
      id: req.body.id,
    },
  });

  try {
    res.status(201).json({
      message: "update Successed",
      data: updatedComment,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error: update Failed",
    });
  }
});

router.post("/delete", async (req, res) => {
  await Comment.destroy({
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

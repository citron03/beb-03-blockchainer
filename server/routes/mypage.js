const express = require('express');
const router = express.Router();
const { User, Post, Comment, Nft } = require('../models');
require('dotenv').config();

router.get('/post/:username', async (req, res) => {
  const postUserName = req.params.username;

  const userInfo = await User.findOne({
    where: { username: postUserName },
  });

  console.log(userInfo);

  if (userInfo === null) {
    res.status(404).send({
      message: 'Error: mypage post loading Failed',
    });
  } else {
    await Post.findAll({
      where: {
        writer: postUserName,
      },
    }).then((result) => {
      res.status(200).send({
        message: 'mypage post loading Successed',
        data: result,
      });
    });
  }
});

router.get('/comment/:username', async (req, res) => {
  const commentUserName = req.params.username;

  const userInfo = await User.findOne({
    where: { username: commentUserName },
  });

  if (userInfo === null) {
    res.status(404).send({
      message: 'Error: mypage comment loading Failed',
    });
  } else {
    await Comment.findAll({
      include: [
        {
          model: Post,
          attributes: ['id'],
        },
      ],
      where: {
        writer: commentUserName,
      },
    }).then((result) => {
      res.status(200).send({
        message: 'mypage comment loading Successed',
        data: result,
      });
    });
  }
});

router.get('/userinfo/:username', async (req, res) => {
  const balanceUserName = req.params.username;

  const userInfo = await User.findOne({
    where: { username: balanceUserName },
  });

  if (userInfo === null) {
    res.status(404).send({
      message: 'Error: mypage balance loading Failed',
    });
  } else {
    res.status(200).send({
      message: 'mypage balance loading Successed',
      data: { balance: userInfo.balance, email: userInfo.email },
    });
  }
});

router.get('/nftlist/:username', async (req, res) => {
  const nftlistUserName = req.params.username;
  const userInfo = await User.findOne({
    where: { username: nftlistUserName },
  });

  if (userInfo === null) {
    res.status(404).send({
      message: 'Error: mypage nft loading Failed',
    });
  } else {
    await Nft.findAll({
      where: {
        ifps: nftlistUserName,
      },
    }).then((result) => {
      res.status(200).send({
        message: 'mypage nft loading Successed',
        data: result,
      });
    });
  }
});

module.exports = router;

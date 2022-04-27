const express = require('express');
const router = express.Router();
const { User } = require('../models');
require('dotenv').config();

const {
  isAuthorized,
  generateAccessToken,
  sendAccessToken,
} = require('../token');

router.get('/login', async (req, res) => {
  const accessTokenData = isAuthorized(req);

  console.log(accessTokenData);

  if (accessTokenData === undefined) {
    res.status(401).send({ data: null, message: 'Not Authorized' });
  } else {
    const userData = await User.findOne({
      where: { username: accessTokenData.username },
    });

    const userInfo = {
      username: userData.username,
      address: userData.address,
      balance: userData.balance,
    };

    res.status(200).send({
      message: 'Login Successed',
      data: userInfo,
    });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userInfo = await User.findOne({
    where: { username: username, password: password },
  });

  if (!userInfo) {
    res.status(400).send('Error: Login Failed');
  }

  console.log(userInfo);

  const data = userInfo.dataValues;
  delete data.password;
  if (data) {
    const accessToken = generateAccessToken(data);
    sendAccessToken(res, accessToken);
  }
});

router.post('/logout', (req, res) => {
  res.status(205).send('Logout Successed');
});

module.exports = router;

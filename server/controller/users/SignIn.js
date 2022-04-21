const { User } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../token');

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const userInfo = await User.findOne({
    where: { username: username, password: password },
  });

  if (userInfo === null) {
    res.status(400).send('Error: Login Failed');
  }

  const data = userInfo.dataValues;
  delete data.password;

  console.log(userInfo.dataValues);

  if (data) {
    const accessToken = generateAccessToken(data);
    sendAccessToken(res, accessToken);
  }
};

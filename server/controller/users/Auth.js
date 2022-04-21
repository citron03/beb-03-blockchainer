const { User } = require('../../models');
const { isAuthorized } = require('../token');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);

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
      data: userInfo,
      message: 'Login Successed',
    });
  }
};

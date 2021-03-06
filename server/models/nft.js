"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nft.belongsTo(models.User, {
        foreignKey: "owner",
        targetKey: "username",
      });
    }
  }
  Nft.init(
    {
      ipfs: DataTypes.STRING,
      price: DataTypes.INTEGER,
      owner: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Nft",
    }
  );
  return Nft;
};

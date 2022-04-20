module.exports = (sequelize, DataTypes) => {
  const Nft = sequelize.define(
    "nft",
    {
      ifps: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      owner: {
        type: DataTypes.INTEGER,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Nft.associate = (db) => {
    db.Nft.belongsTo(db.User, { foreignKey: "owner", targetKey: "id" });
  };
  return Nft;
};

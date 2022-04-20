module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      balance: {
        type: DataTypes.FLOAT,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {
    User.hasMany(db.Post, { foreignKey: "writer", sourceKey: "id" });
    User.hasMany(db.Nft, { foreignKey: "owner", sourceKey: "id" });
    User.hasMany(db.Comment, { foreignKey: "writer", sourceKey: "id" });
  };
  return User;
};

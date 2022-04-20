module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
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
    db.User.hasMany(db.Post, { foreignKey: "writer", sourceKey: "id" });
    db.User.hasMany(db.Nft, { foreignKey: "owner", sourceKey: "id" });
    db.User.hasMany(db.Comment, { foreignKey: "writer", sourceKey: "id" });
  };
  return User;
};

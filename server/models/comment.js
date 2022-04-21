module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comments",
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      writer: {
        type: DataTypes.INTEGER,
      },
      post_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Comment.associate = (db) => {
    Comment.belongsTo(db.User, { foreignKey: "writer", targetKey: "id" });
    Comment.belongsTo(db.Post, { foreignKey: "post_id", targetKey: "id" });
  };
  return Comment;
};

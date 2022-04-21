module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Posts",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      writer: {
        type: DataTypes.INTEGER,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Post.associate = (db) => {
    Post.hasMany(db.Comment, { foreignKey: "post_id", sourceKey: "id" });
    Post.belongsTo(db.User, { foreignKey: "writer", targetKey: "id" });
  };
  return Post;
};

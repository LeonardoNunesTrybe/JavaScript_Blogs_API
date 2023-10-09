module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    },
    published: {
      // allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      // allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: "blog_posts",
  },
);

BlogPost.associate = (models) => {
  BlogPost.belongsTo(models.User, {
    as: 'user',
    foreignKey: 'userId',
  });
}

  return BlogPost;
};
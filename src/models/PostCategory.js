module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      field: 'post_id',
      references: {
        model: "blog_posts",
        key: 'id',          
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      references: {
        model: 'categories',
        key: 'id',
      },
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: "posts_categories",
  },
);

PostCategory.associate = (models) => {
  models.BlogPost.belongsToMany(models.Category, {
    as: 'categories',
    foreignKey: 'postId',
    through: PostCategory,
    otherKey: 'categoryId',
  });
  models.Category.belongsToMany(models.BlogPost, {
    as: 'blog_posts',
    foreignKey: 'categoryId',
    through: PostCategory,
    otherKey: 'postId',
  });
}

  return PostCategory;
};
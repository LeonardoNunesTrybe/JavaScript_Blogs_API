const { BlogPost, PostCategory, User, Category } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const blog = await BlogPost.create({ title, content, userId });
  
  await PostCategory.bulkCreate(categoryIds
    .map((categoryId) => ({ postId: blog.dataValues.id, categoryId })));

  return {
    status: 'CREATED',
    data: blog,
  };
};

const findAll = async () => {
  const blogs = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  return { status: 'SUCCESSFUL', data: blogs };
};

module.exports = {
  createBlogPost,
  findAll,
};
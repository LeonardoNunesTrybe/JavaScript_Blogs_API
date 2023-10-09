const { BlogPost, PostCategory } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const blog = await BlogPost.create({ title, content, userId });
  
  await PostCategory.bulkCreate(categoryIds
    .map((categoryId) => ({ postId: blog.dataValues.id, categoryId })));

  return {
    status: 'CREATED',
    data: blog,
  };
};

module.exports = {
  createBlogPost,
};
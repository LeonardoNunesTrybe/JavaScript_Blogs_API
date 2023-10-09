const { Category, BlogPost } = require('../models');

const validateBlogPost = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const verifyCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categories = await Category.findAll();

  const categoriesIds = categories.map(({ dataValues }) => dataValues.id);

  const invalidCategories = categoryIds.filter((categoryId) => !categoriesIds.includes(categoryId));

  if (invalidCategories.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

const verifyPostExist = async (req, res, next) => {
  const { id } = req.params;

  const post = await BlogPost.findByPk(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  next();
};

module.exports = {
  validateBlogPost,
  verifyCategoryIds,
  verifyPostExist,
};
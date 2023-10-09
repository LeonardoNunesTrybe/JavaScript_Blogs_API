const { Category } = require('../models');

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

module.exports = {
  validateBlogPost,
  verifyCategoryIds,
};
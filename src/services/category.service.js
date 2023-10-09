const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const categoryExists = await Category.findOne({
    where: { name },
  });

  if (categoryExists) {
    return {
      status: 'CONFLICT',
      data: { message: 'Category already registered' },
    };
  }
  const category = await Category.create({ name });

  return {
    status: 'CREATED',
    data: category,
  };
};

const findAll = async () => {
  const categories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
  createCategory,
  findAll,
};
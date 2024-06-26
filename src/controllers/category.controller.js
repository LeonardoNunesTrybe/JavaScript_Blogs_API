const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/httpStatus');

const createCategory = async (req, res) => {
  const { status, data } = await categoryService.createCategory(req.body);

  return res.status(mapStatusHTTP(status)).json(data);
};

const findAll = async (req, res) => {
  const { status, data } = await categoryService.findAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategory,
  findAll,
};
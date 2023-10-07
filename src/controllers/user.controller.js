const { userService } = require('../services');
const mapStatusHTTP = require('../utils/httpStatus');

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);

  return res.status(mapStatusHTTP(status)).json(data);
};

const findAll = async (req, res) => {
  const { status, data } = await userService.findAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.findById(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
  findAll,
  findById,
};
const { userService } = require('../services');
const mapStatusHTTP = require('../utils/httpStatus');

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
};
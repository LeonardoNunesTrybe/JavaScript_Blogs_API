const { blogPostService } = require('../services');
const mapStatusHTTP = require('../utils/httpStatus');

const createBlogPost = async (req, res) => {
  const { id } = req.userId;
  const { status, data } = await blogPostService.createBlogPost(req.body, id);

  return res.status(mapStatusHTTP(status)).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await blogPostService.findAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await blogPostService.findById(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createBlogPost,
  findAll,
  findById,
};
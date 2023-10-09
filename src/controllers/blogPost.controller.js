const { blogPostService } = require('../services');
const mapStatusHTTP = require('../utils/httpStatus');

const createBlogPost = async (req, res) => {
  const { id } = req.userId;
  const { status, data } = await blogPostService.createBlogPost(req.body, id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createBlogPost,
};
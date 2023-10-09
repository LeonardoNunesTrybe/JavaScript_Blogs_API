const express = require('express');
const { blogPostController } = require('../controllers');
const { validateAccessToken } = require('../middlewares/validateAccessToken');
const { validateBlogPost, verifyCategoryIds } = require('../middlewares/blogPostValidation');

const router = express.Router();

router.post(
  '/', 
  validateAccessToken, 
  validateBlogPost,
  verifyCategoryIds, 
  blogPostController.createBlogPost,
);
router.get('/', validateAccessToken, blogPostController.findAll);

module.exports = router;
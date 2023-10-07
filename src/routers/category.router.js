const express = require('express');
const { categoryController } = require('../controllers');
const { validateAccessToken } = require('../middlewares/validateAccessToken');
const { validateCategoryName } = require('../middlewares/categoryValidation');

const router = express.Router();

router.post(
  '/', 
  validateAccessToken, 
  validateCategoryName, 
  categoryController.createCategory,
);

module.exports = router;
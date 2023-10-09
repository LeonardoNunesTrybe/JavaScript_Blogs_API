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
router.get('/', validateAccessToken, categoryController.findAll);

module.exports = router;
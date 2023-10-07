const express = require('express');

const { userController } = require('../controllers');

const { userValidation } = require('../middlewares/userValidation');
const { validateAccessToken } = require('../middlewares/validateAccessToken');

const router = express.Router();

router.post('/', userValidation, userController.createUser);
router.get('/', validateAccessToken, userController.findAll);
router.get('/:id', validateAccessToken, userController.findById);

module.exports = router;
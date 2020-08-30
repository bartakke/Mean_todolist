const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller')
const user = new userController();



router.get('/', user.getAllUsers);

router.get('/:id', user.getUserById);

module.exports = router;
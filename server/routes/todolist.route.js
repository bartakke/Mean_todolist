const express = require('express');
const router = express.Router();

const todolistController = require('../controller/todolist.controller')

router.get('/', todolistController.getAllTodolist)
router.get('/:id', todolistController.getAllTodoListById)


module.exports = router;
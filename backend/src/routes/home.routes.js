const express = require('express');
const router = express.Router();
const { createTodo } = require('../controllers/todos.controllers.js');
const authMiddleware = require('../middlewares/auth.middlewares.js');

router.get('/create-todo', authMiddleware, createTodo);

module.exports = router;
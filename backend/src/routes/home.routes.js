const express = require('express');
const router = express.Router();
const { createTodo } = require('../controllers/todos.controllers.js');
const authMiddleware = require('../middlewares/auth.middlewares.js');
const { getTodos } = require('../controllers/todos.controllers.js');

router.post('/create-todo', authMiddleware, createTodo);
router.get('/get-todos', authMiddleware, getTodos);

module.exports = router;
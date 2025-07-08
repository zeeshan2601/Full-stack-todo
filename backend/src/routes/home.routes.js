const express = require('express');
const router = express.Router();
const { createTodo,getTodos, updateTodo } = require('../controllers/todos.controllers.js');
const authMiddleware = require('../middlewares/auth.middlewares.js');


router.post('/create-todo', authMiddleware, createTodo);
router.get('/get-todos', authMiddleware, getTodos);
router.put('/update-todo/:id', authMiddleware, updateTodo);

module.exports = router;
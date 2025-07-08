const express = require('express');
const router = express.Router();
const { createTodo,getTodos, updateTodo, deleteTodo } = require('../controllers/todos.controllers.js');
const authMiddleware = require('../middlewares/auth.middlewares.js');


router.post('/create-todo', authMiddleware, createTodo);
router.get('/get-todos', authMiddleware, getTodos);
router.put('/update-todo/:id', authMiddleware, updateTodo);
router.delete('/delete-todo/:id', authMiddleware, deleteTodo);

module.exports = router;
const Todo = require('../models/todo.models.js');

const createTodo = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.userInfo.id;

    const newTodo = Todo.create({
        title,
        description,
        status: 'pending',
        createdBy: userId
    });
    return res.status(200).json({
        success: true,
        message: "Todo created successfully",
        data: newTodo
    });
}


module.exports = { createTodo };
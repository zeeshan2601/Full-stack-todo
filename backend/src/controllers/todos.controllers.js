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

const getTodos = async (req, res) => {
    const userId = req.userInfo.id;
    const allTodosByLoggedInUser = await Todo.find({ createdBy: userId });
    console.log(allTodosByLoggedInUser);
    return res.status(200).json({
        success: true,
        message: "Todos fetched successfully",
        data: allTodosByLoggedInUser
    });
}

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });
    return res.status(200).json({
        success: true,
        message: "Todo updated successfully",
        data: updatedTodo
    });
}


module.exports = { createTodo, getTodos, updateTodo };
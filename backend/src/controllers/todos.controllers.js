const Todo = require("../models/todo.models.js");

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.userInfo.id;

    const newTodo = Todo.create({
      title,
      description,
      status: "pending",
      createdBy: userId,
    });
    return res.status(200).json({
      success: true,
      message: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getTodos = async (req, res) => {
  try {
    const userId = req.userInfo.id;
    const allTodosByLoggedInUser = await Todo.find({ createdBy: userId });
    console.log(allTodosByLoggedInUser);
    return res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: allTodosByLoggedInUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, status: status || "pending" },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await Todo.findByIdAndDelete(id);
    if (deleteTodo) {
      return res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
        data: deleteTodo,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };

import React from 'react';
import useTodoStore from '../store/todoStore';

const Todo = () => {
  const todos = useTodoStore((state) => state.todos);

  // Safely check if todos[0] exists before accessing message
  console.log('todos:', todos && todos[0] ? todos[0].data : 'No todos');
  const todoArray =  todos && todos[0] ? todos[0].data : [];

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-gray-900 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Todo List</h1>
      {todoArray.map((todo) => (
        <div
          key={todo.id}
          className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md flex flex-col gap-4 border border-gray-700 mb-6"
        >
          <h2 className="text-xl font-bold text-white">{todo.title}</h2>
          <p className="text-gray-200 mb-2">{todo.description}</p>
          <div className="flex gap-3 mt-2">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400">
              Delete
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Todo;
import React from 'react'

const Todo = ({props}) => {
  return (
    <div className="flex justify-center my-2">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md flex flex-col gap-4 border border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{props.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{props.description}</p>
        <div className="flex gap-3 mt-2">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400">Delete</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Todo 
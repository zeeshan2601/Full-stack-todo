import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createTodo } from '../services/todoService'
import useTodoStore from '../store/todoStore.js'
import useAuthStore from '../store/authStore.js'

const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    background: #2d3748;
    border-radius: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #4f46e5;
    border-radius: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #4f46e5 #2d3748;
  }
`;

const AddTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const todos = useTodoStore((state) => state.todos);

  //const token = useAuthStore((state) => state.token);

  const [descriptionValue, setDescriptionValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm()

  const onSubmit = async(data) => {
    try {
      const response = await createTodo(data);
      console.log(response);
      if(response.success){
        setTodos([...todos, response.todo]);
        console.log('Todo created successfully');
        reset();
        setDescriptionValue("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <div className="flex justify-center items-center min-h-[55vh] bg-gray-100 dark:bg-gray-900">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 w-full max-w-md space-y-6 ">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Add a New Todo</h2>
          <div >
            <label htmlFor="title" className="block text-gray-700 dark:text-gray-200 mb-1 font-bold text-lg">Title:</label>
            <input
              id="title"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
              placeholder="Enter todo title"
            />
            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700 dark:text-gray-200 mb-1 font-bold text-lg">Description:</label>
            <textarea
              id="description"
              {...register("description", { required: "Description is required" })}
              className="custom-scrollbar w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition resize-y min-h-[80px]"
              placeholder="Enter todo description"
              value={descriptionValue}
              onChange={e => {
                setDescriptionValue(e.target.value);
                setValue("description", e.target.value, { shouldValidate: true });
              }}
            />
            {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
            {/* Show the content being written */}
            
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  )
}

export default AddTodos
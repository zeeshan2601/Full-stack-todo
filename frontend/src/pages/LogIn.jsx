import React from 'react'
import { useForm } from 'react-hook-form'

const LogIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
      <div className="flex justify-center items-center min-h-[70vh] bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Log In</h2>
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-1">Username or Email</label>
          <input
            id="email"
            type="text"
            {...register("email", { required: "Email or username is required" })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
            placeholder="Enter your email or username"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 mb-1">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
            placeholder="Enter your password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default LogIn
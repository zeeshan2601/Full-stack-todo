import axiosInstance from "../api/axiosInstance.js";

const createTodo = async (todoData) => {
    const response = await axiosInstance.post("/home/create-todo", todoData);
    return response.data;
  };
  
  const getTodos = async () => {
    const response = await axiosInstance.get("/home/get-todos");
    //console.log(response);
    return response.data;
  };

  export { createTodo, getTodos };
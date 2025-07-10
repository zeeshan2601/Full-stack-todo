import React, { useEffect } from "react";
import AddTodos from "../components/AddTodos";
import Todo from "../components/Todo";

import useTodoStore from "../store/todoStore";
import { getTodos } from "../services/todoService";

const Home = () => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const todos = useTodoStore((state) => state.todos);

  useEffect(() => {
    getTodos()
      .then((fetchedTodos) => {
        // Ensure fetchedTodos is always an array
        if (Array.isArray(fetchedTodos)) {
          setTodos(fetchedTodos);
        } else if (fetchedTodos && typeof fetchedTodos === "object") {
          setTodos([fetchedTodos]);
        } else {
          setTodos([]);
        }
        console.log(fetchedTodos);
      })
      .catch((error) => {
        console.log(error);
        setTodos([]);
      });
  }, [setTodos]);

  return (
    <div className="flex flex-col md:flex-row  justify-center items-start gap-5 w-full max-w-6xl mx-auto py-8">
      <div className="w-full flex justify-center md:sticky top-52 ">
        {/* Increase the size of AddTodos by adjusting max-w and scaling up */}
        <div className="w-full max-w-lg">
          <AddTodos />
        </div>
      </div>
      <div className="w-full md:w-2/3 flex justify-center">
        <Todo />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AddTodos from "../components/AddTodos";
import Todo from "../components/Todo";

import useTodoStore from "../store/todoStore";
import { getTodos } from "../services/todoService";

const Home = () => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const todos = useTodoStore((state) => state.todos);

  useEffect(() => {
    getTodos()
    .then((todos) => {
      setTodos(todos);
      //console.log(todos);
    })
    .catch((error) => console.log(error));
  }, []);

  //const onSubmit = (data) => console.log(data)

  return(
    <div>
      <div>
        <AddTodos />
      </div>
      
    </div>
  )
};

export default Home;

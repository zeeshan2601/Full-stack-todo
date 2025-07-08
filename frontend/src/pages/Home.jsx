import React from "react";
import { useForm } from "react-hook-form";
import AddTodos from "../components/AddTodos";
import Todo from "../components/todo";
import axios from "axios";

const Home = () => {
  const fakeData = {
    title: "Todo 1",
    description: "Description 1"
  }

  const onSubmit = (data) => console.log(data)

  return(
    <div>
      <AddTodos />
      <Todo props={fakeData} />
    </div>
  )
};

export default Home;

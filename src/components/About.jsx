import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, updateToDo } from "../Redux/counterSlice";
import { useState, useEffect } from "react";
import React from "react";
const About = () => {
   const [todo, setTodo] = useState([]);
   const dispatch = useDispatch();

   const data = useSelector((state) => state.counter.value);
   const toDoList = useSelector((state) => state.counter.todoInfo);

   console.log("toDoList from redux store", toDoList);

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${data}`)
         .then((response) => response.json())
         .then((json) => setTodo(json));
   }, [data]);
   return (
      <div>
         <h1>ToDo information of {data}</h1>

         {toDoList.map((todo, index) => (
            <h3 key={index}>{todo?.title}</h3>
         ))}
         <br />
         <button onClick={() => dispatch(increament())}>Increament +</button>
         <button onClick={() => dispatch(decreament())}>Decreament-</button>
         <button onClick={() => dispatch(updateToDo(todo))}>
            update to do{" "}
         </button>
      </div>
   );
};

export default About;

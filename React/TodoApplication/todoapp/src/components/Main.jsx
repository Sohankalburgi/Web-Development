import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Main = () => {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("todos");
    const todolist = JSON.parse(items)
    if(todolist){
      setTodos(todolist)
    }
  }, [])
  
  

  const saveToLS = (todos)=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addToDo = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    saveToLS([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (id) => {
    const index = todos.findIndex(item =>{
      return item.id=== id;
    })
    setTodo(todos[index].todo)
    const todosafter = todos.filter((val) => {
      return val.id != k;
    });
    setTodos(todosafter);
    saveToLS(todosafter);
  };

  const handleDelete = (k) => {
    const todosafterdelete = todos.filter((val) => {
      return val.id != k;
    });
    setTodos(todosafterdelete);
    saveToLS(todosafterdelete);
  };

  const handleCheckboxChange = (e) => {
    const id = e.target.name;
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    todos[index].isCompleted = !todos[index].isCompleted;
    const todosafterchange = [...todos];
    setTodos(todosafterchange);
    saveToLS(todosafterchange);
  };

  return (
    <div className="container px-3 pb-5 bg-violet-300 m-auto mt-6 rounded-lg min-h-[75vh]">
      <div className="mx-3 pt-3">
        <h3 className="text-xl font-bold">ADD TODO</h3>
        <input
          className="mt-3 focus:border focus:border-black w-96 p-1"
          type="text"
          onChange={handleChange}
          value={todo}
          name="task"
          id="task"
        />
        <button
          onClick={addToDo}
          className=" mx-4 text-black border px-3 bg-cyan-400 border border-cyan-400 
        rounded-md hover:font-bold hover:text-white hover:text-lg p-1"
        >
          Add
        </button>
      </div>
      <div className="mx-3 pt-3">
        <h3 className=" text-xl font-bold">Your TODO's</h3>
        <div className="flex">
          {todos.length==0 ? <h2>No Todos To Display</h2>:""}
          <ul>
            {todos.map((val) => (
              <li key={val.id} className="flex justify-between mb-3">
                <input
                  type="checkbox"
                  name={val.id}
                  id="isCompleted"
                  onChange={handleCheckboxChange}
                  className="size-4 mx-4 mt-1"
                  value={val.isCompleted}
                  checked={val.isCompleted}
                />
                <label
                  htmlFor="isCompleted"
                  className={val.isCompleted ? "line-through" : ""}
                >
                  {val.todo}
                </label>
                <div>
                  <button
                    onClick={() => handleEdit(val.id)}
                    className=" mx-3 text-sm text-black border px-3 bg-cyan-400 border border-cyan-400 
                  rounded-md hover:font-bold hover:text-white hover:text-sm p-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(val.id)}
                    className=" text-sm text-black border px-3 bg-cyan-400 border border-cyan-400 
                  rounded-md hover:font-bold hover:text-white hover:text-sm p-1"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

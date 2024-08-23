import { useEffect, useState } from "react";
import AddItem from "./Components/AddItem";

import List from "./Components/List";
function App() {
  const [inputItem, setInputItem] = useState("");
  const [todo, setTodo] = useState([]);
  // handleformtodo list
  const handleForm = (event) => {
    event.preventDefault();
    // alert(ok)
    if (!inputItem) {
      return;
    }
    

    setTodo((pre) => [...pre, inputItem]);
    setInputItem('');
  };
  const inputHandle = (e) => {
    setInputItem(e.target.value)
    //  console.log(inputItem)
  };
  // delete data
  const deleteItem = (data) => {
    // alert(data)
    const del = todo.filter((items) => {
      return items !== data;
    });
    setTodo(del);
  };
  // clear all
  const clearAll = () => {
    setTodo("");
  };
  
  return (
    <>
      <div className=" bg-blue-900 w-full h-screen flex justify-center items-center relative">
        <div className=" bg-slate-50 w-[90%] sm:w-[90%] md:w-[50%] h-[70%] rounded-lg shadow-xl px-5">
          <div className=" flex justify-center uppercase text-4xl font-bold mt-5 text-blue-950">
            todo list
          </div>
          {/* add items form */}
          <AddItem inputHandle={inputHandle} setInputItem={setInputItem} setTodo={setTodo} handleForm={handleForm} inputItem={inputItem}/>
          {/* <div className="my-5">
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter items"
            value={inputItem} // This binds the input's value to the state
            onChange={inputHandle}
            className="w-[70%] h-[35px] outline-none border-2 rounded-md border-blue-800 ps-3"
          />
          <button
            type="submit"
            className="text-base font-semibold capitalize w-[80px] h-[35px] bg-blue-700 ms-5 text-slate-50 rounded-lg"
          >
            Add
          </button>
        </form>
      </div> */}
          {/* end add iteems */}
          
          {/* list show */}
          <List todo={todo} deleteItem={deleteItem} clearAll={clearAll}/>
        </div>
      </div>
    </>
  );
}

export default App;

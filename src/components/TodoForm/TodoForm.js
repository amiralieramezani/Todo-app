import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");

  const current = new Date();
  let MyDateString =
    current.getFullYear() +
    "-" +
    ("0" + (current.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + current.getDate()).slice(-2);
  const [date, setDate] = useState(props.edit ? props.edit.date : MyDateString);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Enter your Todo!");
      return;
    }
    props.addTodoHandler(todo, date);
    setTodo("");
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <form
      className="flex items-center h-[25vh] mb-[3vh] justify-between flex-col sm:flex-row sm:justify-around sm:w-11/12 sm:m-auto md:w-9/12 lg:w-7/12 xl:w-6/12"
      onSubmit={submitHandler}
    >
      <input
        className="outline-none border border-solid  border-blue-500 rounded px-5 py-2 w-60 font-bold placeholder:text-blue-300 focus:border-2"
        placeholder={props.edit ? "Update value ..." : "Add new todo ..."}
        type="text"
        value={todo}
        onChange={todoHandler}
        ref={inputRef}
      />

      <input
        type="date"
        className="outline-none border border-solid  border-blue-500 rounded px-5 py-2 w-60 font-bold placeholder:text-blue-300 focus:border-2"
        value={date}
        onChange={dateHandler}
      />

      <button
        type="submit"
        className={props.edit ? "outline-none text-blue-700 bg-blue-50 border border-solid border-blue-700 py-2 px-5 rounded font-bold" : "outline-none text-blue-50 bg-blue-700 border border-solid border-blue-50 py-2 px-5 rounded font-bold"}
      >
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;

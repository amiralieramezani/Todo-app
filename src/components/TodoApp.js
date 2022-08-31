import { useEffect, useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import NavBar from "./NavBar/NavBar";
import Filter from "./Filter/Filter";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilterTodos] = useState([]);
  const [filter, setFilter] = useState({ value: "All", label: "All" });

  useEffect(() => {
    FilterTodos(filter.value);
  }, [todos, filter]);

  const addTodoHandler = (todo, date) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      date: date,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const UpdateTodo = (id, newValue, newDate) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    selectedTodo.date = newDate;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const FilterTodos = (status) => {
    switch (status) {
      case "All": {
        setFilterTodos(todos);
        break;
      }
      case "Completed": {
        setFilterTodos(todos.filter((t) => t.isCompleted));
        break;
      }
      case "Uncompleted": {
        setFilterTodos(todos.filter((t) => !t.isCompleted));
        break;
      }
      default: {
        return setFilterTodos(todos);
      }
    }
  };

  const selectHandler = (e) => {
    setFilter(e);
    FilterTodos(e.value);
  };

  return (
    <div>
      <NavBar
        quantity={todos.length}
        unCompletedTodos={todos.filter((p) => p.isCompleted === false).length}
      />
      <Filter filter={filter} selectHandler={selectHandler} />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        onComplete={completeTodo}
        onEdit={UpdateTodo}
        onRemove={removeTodo}
        todos={filteredTodos}
      />
    </div>
  );
};

export default TodoApp;

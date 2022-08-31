import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = ({ todos, onComplete, onRemove, onEdit }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editTodoHandler = (newValue, newDate) => {
    onEdit(edit.id, newValue, newDate);
    setEdit({ id: null, text: "" });
  };

  if (todos.length === 0) {
    return (
      <div>
        <p className="text-blue-900">Add some Todo's!</p>
      </div>
    );
  }
  return (
    <div className="w-11/12 m-auto flex flex-col items-center">
      {edit.id ? (
        <TodoForm addTodoHandler={editTodoHandler} edit={edit} />
      ) : (
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onRemove={() => onRemove(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;

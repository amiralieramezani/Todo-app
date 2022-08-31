import { FiTrash2, FiEdit } from "react-icons/fi";

const Todo = ({ todo, onComplete, onRemove, onEdit }) => {
  return (
    <div
      className="sm:w-10/12 w-[98%] flex justify-between bg-blue-600 text-white rounded-lg py-1 px-4 mb-[20px] items-center text-xl sm:text-3xl "
      key={todo.id}
    >
      <p
        className={
          todo.isCompleted
            ? `line-through opacity-50 cursor-pointer w-[60%] text-left`
            : `opacity-100 cursor-pointer w-[60%] text-left`
        }
        onClick={onComplete}
      >
        {todo.text}
      </p>
      <p
        onClick={onComplete}
        className={
          todo.isCompleted
            ? `line-through  text-xs sm:text-xl opacity-50 cursor-pointer flex w-52 text-left`
            : `opacity-100  text-xs sm:text-xl cursor-pointer flex w-52 text-left`
        }
      >
        {todo.date}
      </p>
      <div className="flex items-center">
        <button
          className="text-xl text-blue-900 outline-0 border-2 border-solid border-blue-900 bg-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded"
          onClick={onEdit}
        >
          <FiEdit />
        </button>
        <button
          className="text-xl text-red-600 outline-none border-2 border-solid border-red-600 bg-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded ml-1"
          onClick={onRemove}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default Todo;

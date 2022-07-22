import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      {props.items.map((todo, index) => (
        <div
          key={index}
          className='card p-3 my-3 d-flex justify-content-between flex-row align-items-center '
        >
          <div className='text'>{todo.text}</div>
          <button
            className='btn btn-danger'
            onClick={props.onDeleteTodo.bind(null, todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

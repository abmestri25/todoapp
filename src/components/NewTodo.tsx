import React, { useRef } from "react";

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<AddTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler} className='card p-5'>
      <div className='d-flex justify-content-space flex-row'>
        <input
          type='text'
          className='form-control p-3'
          placeholder='Your todo name'
          aria-label='Your todo name'
          ref={textInputRef}
        />
        <button className='btn btn-primary mx-2'>Add </button>
      </div>
    </form>
  );
};

export default NewTodo;

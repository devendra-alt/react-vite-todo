import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(false);
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      setMessage('Please add a item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={handleChange} />
      <button className="todo-btn">Submit</button>
      <span className="error-msg">{message}</span>
    </form>
  );
};

export default InputTodo;

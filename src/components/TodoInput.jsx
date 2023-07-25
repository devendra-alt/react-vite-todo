import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = useCallback((e) => {
    setMessage(false);
    e.preventDefault();
    setTitle(e.target.value);
  });

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
    <form onSubmit={() => handleSubmit}>
      <input type="text" name="title" value={title} onChange={handleChange} />
      <button className="todo-btn" type="submit">
        Submit
      </button>
      <span className="error-msg">{message}</span>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;

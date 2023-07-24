import PropTypes from 'prop-types';

const TodoItem = ({ todoTask, handleCheckbox, delTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todoTask.completed}
        onChange={() => handleCheckbox(todoTask.id)}
      />
      {todoTask.title}
      <button onClick={() => delTodo(todoTask.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;

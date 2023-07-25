import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoItem = ({ todoTask, handleCheckbox, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const vieWMode = {};
  const editMode = {};
  if (editing) {
    vieWMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleEditing = () => {
    setEditing(true);
  };
  function handleUpdateDone(e) {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  }
  return (
    <li>
      <div style={vieWMode}>
        <input
          type="checkbox"
          checked={todoTask.completed}
          onChange={() => handleCheckbox(todoTask.id)}
        />
        {todoTask.title}
        <button onClick={handleEditing} type="submit">
          Edit
        </button>
        <button onClick={() => delTodo(todoTask.id)} type="submit">
          Delete
        </button>
      </div>
      <input
        type="text"
        value={todoTask.title}
        style={editMode}
        onChange={(e) => {
          setUpdate(e.target.value, todoTask.id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todoTask: PropTypes.shape().isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;

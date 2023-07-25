import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleCheckbox, delTodo, setUpdate }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todoTask={todo}
        handleCheckbox={handleCheckbox}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.shape([]).isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;

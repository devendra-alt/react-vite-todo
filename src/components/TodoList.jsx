import PropType from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleCheckbox, delTodo, setUpdate }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todoTask={todo}
            handleCheckbox={handleCheckbox}
            delTodo={delTodo}
            setUpdate={setUpdate}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {};

export default TodoList;

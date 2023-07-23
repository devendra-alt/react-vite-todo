import PropType from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todoList } = props;
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todoTask={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  props: PropType.shape({
    todoList: PropType.arrayOf(PropType.string),
  }).isRequired,
  todoList: PropType.arrayOf(PropType.string).isRequired,
};

export default TodoList;

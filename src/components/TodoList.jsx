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

export default TodoList;

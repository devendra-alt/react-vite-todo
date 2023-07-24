import { useState } from 'react';
import InputTodo from './TodoInput';
import TodoList from './TodoList';

const TodosLogic = () => {
  const [todos, setToDos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const [title, setTitle] = useState('');

  function handleCheckbox(id) {
    setToDos((pre) =>
      pre.map((el) => (el.id === id ? { ...el, completed: !el.completed } : el))
    );
  }

  function delTodo(id) {
    setToDos([...todos.filter((todo) => todo.id !== id)]);
  }

  return (
    <div>
      <InputTodo />
      <TodoList
        todos={todos}
        handleCheckbox={handleCheckbox}
        delTodo={delTodo}
      />
    </div>
  );
};
export default TodosLogic;

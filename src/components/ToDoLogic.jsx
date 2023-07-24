import { useState, useEffect } from 'react';
import InputTodo from './TodoInput';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
  const [todos, setToDos] = useState(getInitialTodos());

  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setToDos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setToDos((pre) =>
      pre.map((el) => (el.id === id ? { ...el, title: updatedTitle } : el))
    );
  };

  function delTodo(id) {
    setToDos([...todos.filter((todo) => todo.id !== id)]);
  }

  function handleCheckbox(id) {
    setToDos((pre) =>
      pre.map((el) => (el.id === id ? { ...el, completed: !el.completed } : el))
    );
  }

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList
        todos={todos}
        handleCheckbox={handleCheckbox}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};
export default TodosLogic;

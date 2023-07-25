import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import InputTodo from './TodoInput';
import TodoList from './TodoList';

const TodosLogic = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setToDos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  function addTodoItem(title) {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setToDos([...todos, newTodo]);
  }

  function setUpdate(updatedTitle, id) {
    setToDos((pre) => {
      pre.map((el) => (el.id === id ? { ...el, title: updatedTitle } : el));
    });
  }

  function delTodo(id) {
    setToDos([...todos.filter((todo) => todo.id !== id)]);
  }

  function handleCheckbox(id) {
    setToDos((pre) => {
      pre.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
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

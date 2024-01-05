import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(["doing homework", "shopping", "fishing"]);
  const todosLi = todos.map((todo) => (
    <li key={todo}>
      <span>{todo}</span>
    </li>
  ));

  const handleAddTodo = () => {
    setTodos((prev) => {
      return [...prev, `new todo ${prev.length + 1}`];
    });
  };
  return (
    <div className="todo-list">
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>{todosLi}</ul>
    </div>
  );
};

export default TodoList;

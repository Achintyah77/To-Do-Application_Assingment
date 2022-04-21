import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

import "./TodoList.css";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);
		setTodos(removedArr);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div>
			<h1 className='todo-heading'>Plan Your Day!!!</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
		</div>
	);
}

export default TodoList;

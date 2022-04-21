import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
	return (
		<div>
			{" "}
			<h1 className='main-heading'>To-Do Application </h1>
			<div className='todo-app'>
				<TodoList />
			</div>
		</div>
	);
}

export default App;

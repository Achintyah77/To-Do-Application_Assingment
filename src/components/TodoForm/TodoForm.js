import React, { useState, useEffect, useRef } from "react";

import "./TodoForm.css";

function TodoForm(props) {
	const [input, setInput] = useState("");
	const [warning, setWarning] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (input.trim() === "") {
			setInput("");
			setWarning("Empty Strings Not Allowed");
			return;
		}
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input.trim(),
		});
		setInput("");
		setWarning("");
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='todo-form'>
				<input
					placeholder='Add a todo'
					value={input}
					onChange={handleChange}
					name='text'
					className='todo-input'
					ref={inputRef}
				/>
				<button
					onClick={handleSubmit}
					className='todo-button'
					disabled={input.length === 0}>
					Add todo
				</button>
			</form>
			<div className='warning'>{warning}</div>
		</>
	);
}

export default TodoForm;

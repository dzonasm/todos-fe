import React from 'react'

const Todo = ({ todo }) => {
	const { id, done } = todo
	return (
		<div className={`${done ? 'done' : ''} todoContainer`}>
			<p>{todo.todo}</p>
			<p>{id}</p>
		</div>
	)
}

export default Todo

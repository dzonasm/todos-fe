import React from 'react'
import './todo.styles.css'

const Todo = ({ todo }) => {
	const { id, done } = todo
	return (
		<div className={`${done ? 'done' : ''} todoContainer`}>
			<p>{todo.todo}</p>
		</div>
	)
}

export default Todo

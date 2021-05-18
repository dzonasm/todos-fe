import React, { useState } from 'react'
import Todo from '../todo/todo.component'
import './todo-list.styles.css'

const TodoList = ({ todoArray }) => {
	const [todos, setTodos] = useState(todoArray)

	const content = todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)

	return <div className="todos-container">{content}</div>
}

export default TodoList

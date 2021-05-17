import './App.css'
import React, { useState, useEffect } from 'react'
import { todoList } from './todos'
import Todo from './components/todo/todo.component'

function App() {
	const [todos, setTodos] = useState(todoList)

	const content = todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)

	return (
		<div className="App">
			{content}
			<p>this the tood</p>
		</div>
	)
}

export default App

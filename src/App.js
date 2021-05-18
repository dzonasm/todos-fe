import './App.css'
import React, { useState, useEffect } from 'react'

import { todoList } from './todos'
import TodoList from './components/todo-list/todo-list.component'
import Login from './components/login/login.component'
import axios from 'axios'

function App() {
	const [todos, setTodos] = useState(todoList)
	const [user, setUser] = useState({})

	const userId = '60a298b16c2e4f2721847633'

	//fetch user todos
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('http://localhost:3000/api/test')

			setTodos(result.data)
			console.log(result.data)
		}

		fetchData()
	}, [])

	const testBody = {
		username: 'test3',
		password: 'welcome',
	}

	const login = async () => {
		const getLogin = await fetch('http://localhost:3000/api/user/signIn', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(testBody),
		})
		const response = await getLogin.data
		console.log(response)
	}

	return (
		<div className="App">
			<Login login={login}></Login>
			<TodoList todoArray={todoList}></TodoList>
		</div>
	)
}

export default App

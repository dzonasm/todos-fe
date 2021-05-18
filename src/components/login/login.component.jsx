import React, { useState } from 'react'
import './login.styles.css'

const Login = ({ login }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onEmailChange = e => setEmail(e.target.value)
	const onPasswordChange = e => setPassword(e.target.value)

	return (
		<div className="login">
			<p>username: test3, password: welcome</p>
			<label for="email">Email</label>
			<input onChange={onEmailChange} name="email" type="text" value={email} />
			<label for="password">Password</label>
			<input onChange={onPasswordChange} name="password" type="text" value={password} />
			<button onClick={login} className="submit-btn">
				LogIn
			</button>
		</div>
	)
}

export default Login

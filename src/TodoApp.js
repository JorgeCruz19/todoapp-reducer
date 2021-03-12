import { useReducer, useEffect } from 'react'
import { todoReducer } from './reducers/todoReducer'
import { useForm } from './hooks/useForm'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './todoapp.css'

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || []
}

function TodoApp() {
	const [todos, dispatch] = useReducer(todoReducer, [], init)

	const [{ description, title }, handleInputChange, reset] = useForm({
		title: '',
		description: '',
	})

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title.trim().length <= 1 || description.trim().length <= 1) {
			return
		}

		const newTodo = {
			id: new Date().getTime(),
			title: title,
			desc: description,
			done: false,
		}

		const action = {
			type: 'add',
			payload: newTodo,
		}

		dispatch(action)
		reset()
	}

	const handleDone = (todoId) => {
		//Otra forma de enviar el type y el payload
		dispatch({
			type: 'done',
			payload: todoId,
		})
	}

	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload: todoId,
		}

		dispatch(action)
	}

	return (
		<div className="container-fluid py-5">
			<Header countTodos={todos.length} />
			<div className="row">

        {/* TODO: Hacer refactor del TodoForm */}
				<TodoForm title={title} description={description} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

				<TodoList todos={todos} handleDelete={handleDelete} handleDone={handleDone} />
			</div>
		</div>
	)
}

export default TodoApp

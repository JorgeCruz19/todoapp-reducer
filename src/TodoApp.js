import { useReducer, useEffect } from 'react'

import { todoReducer } from './reducers/todoReducer'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './todoapp.css'

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || []
}

function TodoApp() {
	const [todos, dispatch] = useReducer(todoReducer, [], init)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		})
	}
	const handleDone = (todoId) => {
		dispatch({
			type: 'done',
			payload: todoId,
		})
	}
	const handleDelete = (todoId) => {
		dispatch({
			type: 'delete',
			payload: todoId,
		})
	}

	return (
		<div className="container-fluid py-5">
			<Header countTodos={todos.length} />
			<div className="row">
				<TodoForm handleAddTodo={handleAddTodo} />
				<TodoList todos={todos} handleDelete={handleDelete} handleDone={handleDone} />
			</div>
		</div>
	)
}

export default TodoApp

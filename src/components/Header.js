import React from 'react'

const Header = ({ countTodos }) => {
	return (
		<header className="d-flex justify-content-between align-items-center mb-5">
			<h1>ToDo</h1>
			<button type="button" className="btn btn-accent">
				ToDos <span className="badge bg-light text-black-50">{countTodos}</span>
				<span className="visually-hidden"></span>
			</button>
		</header>
	)
}

export default Header

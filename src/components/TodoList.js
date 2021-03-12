import TodoListItem from './TodoListItem'

const TodoList = ({ todos, handleDelete, handleDone }) => {
	return (
		<div className="col-12 col-lg-9">
			{todos.length > 0 ? (
				<ul className="list-group">
					<div className="row">
						{todos.map(({ id, title, desc, done }, index) => (
							<TodoListItem key={id} id={id} title={title} desc={desc} done={done} index={index} handleDelete={handleDelete} handleDone={handleDone} />
						))}
					</div>
				</ul>
			) : (
				<p className="nothing">No hay tareas</p>
			)}
		</div>
	)
}

export default TodoList

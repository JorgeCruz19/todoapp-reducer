import { useForm } from '../hooks/useForm'

const FormTodo = ({ handleAddTodo }) => {
	const [{ title, description }, handleInputChange, reset] = useForm({
		title: '',
		description: '',
	})

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

		handleAddTodo(newTodo)
		reset()
	}

	return (
		<div className="col-12 col-lg-3">
			<form onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<input
						type="text"
						name="title"
						value={title}
						onChange={handleInputChange}
						className="form-control mb-2"
						placeholder="Add a title"
						autoComplete="off"
						aria-label="Add a title"
						aria-describedby="button-addon2"
					/>
					<input
						type="text"
						name="description"
						value={description}
						onChange={handleInputChange}
						className="form-control mb-2"
						placeholder="Add a description"
						autoComplete="off"
						aria-label="Add a description"
						aria-describedby="button-addon2"
					/>
					<button className="btn btn-accent d-block w-100" type="submit" id="btn-submit">
						Agregar
					</button>
				</div>
			</form>
		</div>
	)
}

export default FormTodo

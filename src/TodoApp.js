import { useReducer, useEffect } from 'react';
import { todoReducer } from './reducers/todoReducer'
import {useForm} from './hooks/useForm';

import './todoapp.css';


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

function TodoApp() {

  const [todos, dispatch] = useReducer(todoReducer, [], init)
  
  const [ { description }, handleInputChange, reset] = useForm({
    description: ''
  })

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])


  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
    reset();
  }

  return (
    <div className="container py-5">
      <header className="">
        <h1 className="mb-5">TodoApp ({todos.length})</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input 
            type="text" 
            name="description" 
            value={description} 
            onChange={handleInputChange} 
            className="form-control" 
            placeholder="Ingrese el ToDo" 
            autoComplete="off" 
            aria-label="Ingrese el ToDo" 
            aria-describedby="button-addon2" 
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="submit" id="btn-submit">Agregar</button>
          </div>
        </div>
      </form>

      <ul className="list-group">
        {
          todos.map((todo, i) => (
              <li key={todo.id} className="d-flex justify-content-between align-items-center list-group-item mb-1 py-3" >
                {i + 1}. {todo.desc}
                <button className="btn btn-danger">Borrar</button>
              </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TodoApp;

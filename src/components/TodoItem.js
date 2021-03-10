import React from 'react'

const TodoItem = ({id, title, desc, done, handleDelete, handleDone, iteracion }) => {

  return (


    <div className="col-12 col-md-6">
      <li className="list-group-item mb-1 py-3 bg-yellow border-0 rounded">
        <h2 className={`d-flex align-items-center justify-content-between title mb-3 ${ done ? 'done' : '' }`}>
          { title }
          <div className="dropdown">
            <i className="fas fa-ellipsis-h" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button className="dropdown-item" onClick={ () => handleDelete(id) }>
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </h2>
        <p className={`description ${ done ? 'done' : '' }`}>{ desc }</p>
        <div className="form-check text-right">
          <input className="form-check-input" onClick={() => handleDone(id)} type="checkbox" value="" id={`checkDone-${ iteracion }`} />
          <label className="form-check-label" htmlFor={`checkDone-${ iteracion }`} >
            Done
          </label>
        </div>
      </li>
    </div>


  )
}

export default TodoItem

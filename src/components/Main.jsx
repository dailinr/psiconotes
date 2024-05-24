import React from 'react'
import '../main.css';

export const Main = () => {
  return (
    
    <div className="main">
      
      <form className="d-flex search-container">
          <input className="form-control search me-2" type="text" placeholder="Search for something" />
      </form>

      <div className='boton-agendar'>
        <button type="button" class="btn btn-primary">Agendar sesión</button>
      </div>
      
      <div className="sesiones-cont">

      </div>
    </div>
  )
}

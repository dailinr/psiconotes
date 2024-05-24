import React from 'react'
import '../main.css';
import { FilaSesion } from './FilaSesion.jsx'


export const Main = () => {
  return (
    
    <div className="main">
      
      <form className="d-flex search-container">
          <input className="form-control search me-2 shadow-sm" type="text" placeholder="Search for something" />
      </form>

      <div className='boton-agendar'>
        <button type="button" class="btn btn-primary shadow">Agendar sesión</button>
      </div>
      
      <div className="sesiones-cont">
        <div>
          <p >Sesiones 
            <span className="filter">
              Filtrar <i class="bi bi-caret-down-fill"></i>
            </span>
          </p> 
        </div>

        <FilaSesion/>
        <FilaSesion/>
        <FilaSesion/>
        <FilaSesion/>
        

      </div>
    </div>
  )
}

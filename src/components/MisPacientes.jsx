import React from 'react';
import { FilaSesion } from './FilaSesion.jsx'

export const MisPacientes = () => {
  return (
    <div>
    <div className="search-and-button-container">
      <form className="d-flex search-container">
          <input className="form-control search me-2 shadow-sm" type="text" placeholder="Search for something" />
      </form>

      <div className='boton-agendar'>
        <button type="button" class="btn btn-primary shadow">
          <i class="bi bi-person-add"></i>
          &nbsp; Agendar sesión</button>
      </div>
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
  );
};
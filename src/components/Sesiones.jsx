import React from 'react';
import { FilaSesion } from './FilaSesion.jsx';

export const Sesiones = ({ datos }) => {

  return (
    <div>
      <div className="search-and-button-container">
        <form className="d-flex search-container">
          <input className="form-control search me-2 shadow-sm" type="text" placeholder="Search for something" />
        </form>
      </div>
      
      <div className="sesiones-cont">
        <div>
          <p>Sesiones 
            <span className="filter">
              Filtrar <i className="bi bi-caret-down-fill"></i>
            </span>
          </p> 
        </div>

        {datos.map((sesion, index) => (
          <FilaSesion key={index} {...sesion} />
        ))}
        
      </div>
    </div>
  );
};

export default Sesiones;

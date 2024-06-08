import { FilaSesion } from './FilaSesion.jsx'
import React, { useEffect, useState } from 'react'

// import {  PDFViewer } from '@react-pdf/renderer';
// import { PDF } from './PDF.jsx';
// import { MostrarInforme } from './MostrarInforme.jsx';

export const Sesiones = () => {

  const datosIniciales = [
    { id: 1, nombre: 'Sesión 1', fecha: '2022-01-01', hora: '10:00', estado: 'activo' },
    { id: 2, nombre: 'Sesión 2', fecha: '2022-01-02', hora: '11:00', estado: 'activo'},
  ];

  const [datos, setDatos] = useState(datosIniciales);


  return (
    <div>
    <div className="search-and-button-container">
      <form className="d-flex search-container">
          <input className="form-control search me-2 shadow-sm" type="text" placeholder="Search for something" />
      </form>
    </div>
      
      <div className="sesiones-cont">
        <div>
          <p >Sesiones 
            <span className="filter">
              Filtrar <i class="bi bi-caret-down-fill"></i>
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
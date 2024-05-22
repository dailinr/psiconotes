import React from 'react'

export const Aside = () => {
  return (
    
    <div className="aside d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: '250px'}}>
    
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          Mis pacientes
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
  
          Nuevos pacientes
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
           Sesiones
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          Calendario
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          Notificaciones
        </a>
      </li>
    </ul>
    <hr />
   
  </div>
    
  )
}

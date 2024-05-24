import React from 'react'

export const Aside = () => {
  return (
    
    <div className="aside bg-white d-flex  flex-column flex-shrink-0 p-3 bg-body-tertiary border-right" style={{width: '250px'}}>
    
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item " >
        <a href="#" className=" nav-link " aria-current="page">
        
        <i class="bi bi-person-fill"/> 
        &nbsp; Mis pacientes
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
        <i class="bi bi-plus-circle-fill"></i>
        &nbsp; Nuevos pacientes
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
        <i class="bi bi-clipboard2-heart-fill"></i>
        &nbsp;    Sesiones
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
        <i class="bi bi-calendar-week"></i>
        &nbsp;  Calendario
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
        <i class="bi bi-bell-fill"></i>
        &nbsp;  Notificaciones
        </a>
      </li>
      <li className="salir">
        <a href="#" className="nav-link link-body-emphasis">
        <i class="bi bi-box-arrow-in-right"></i>
        &nbsp;  Cerrar sesión
        </a>
      </li>
    </ul>
    <hr />

   
  </div>
    
  )
}

import React from 'react';

export const Aside = ({ activeSection, setActiveSection }) => {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="aside shadow-sm bg-white d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-right" style={{ width: '250px' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className={`nav-item ${activeSection === 'MisPacientes' ? 'active' : ''}`}>
          <a href="#" className="nav-link" aria-current="page" onClick={() => handleClick('MisPacientes')}>
            <i className="bi bi-person-fill" />
            &nbsp; Mis pacientes
          </a>
        </li>
        <li className={`nav-item ${activeSection === 'NuevosPacientes' ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleClick('NuevosPacientes')}>
            <i className="bi bi-plus-circle-fill"></i>
            &nbsp; Nuevos pacientes
          </a>
        </li>
        <li className={`nav-item ${activeSection === 'Sesiones' ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleClick('Sesiones')}>
            <i className="bi bi-clipboard2-heart-fill"></i>
            &nbsp; Sesiones
          </a>
        </li>
        <li className={`nav-item ${activeSection === 'Calendario' ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleClick('Calendario')}>
            <i className="bi bi-calendar-week"></i>
            &nbsp; Calendario
          </a>
        </li>
        <li className={`nav-item ${activeSection === 'Notificaciones' ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleClick('Notificaciones')}>
            <i className="bi bi-bell-fill"></i>
            &nbsp; Notificaciones
          </a>
        </li>
        <li className="salir">
          <a href="#" className="nav-link">
            <i className="bi bi-box-arrow-in-right"></i>
            &nbsp; Cerrar sesión
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

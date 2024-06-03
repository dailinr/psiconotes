import React from 'react';

export const Aside = ({ activeSection, setActiveSection, userType }) => {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  const renderPsychologistMenu = () => (
    <>
      <li className={`nav-item ${activeSection === 'MisPacientes' ? 'active' : ''}`}>
        <a href="#" className="nav-link" aria-current="page" onClick={() => handleClick('MisPacientes')}>
        <i className="bi bi-people-fill"></i>
          &nbsp; Mis pacientes
        </a>
      </li>
      <li className={`nav-item ${activeSection === 'NuevosPacientes' ? 'active' : ''}`}>
        <a href="#" className="nav-link" onClick={() => handleClick('NuevosPacientes')}>
          <i className="bi bi-person-plus-fill"></i>
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
    </>
  );

  const renderAdminMenu = () => (
    <>
      <li className={`nav-item ${activeSection === 'Psicologos' ? 'active' : ''}`}>
        <a href="#" className="nav-link" onClick={() => handleClick('Psicologos')}>
          <i className="bi bi-people-fill"></i>
          &nbsp; Psicólogos
        </a>
      </li>
      <li className={`nav-item ${activeSection === 'NuevosPsicologos' ? 'active' : ''}`}>
        <a href="#" className="nav-link" onClick={() => handleClick('NuevosPsicologos')}>
          <i className="bi bi-person-plus-fill"></i>
          &nbsp; Nuevos Psicólogos
        </a>
      </li>
      <li className={`nav-item ${activeSection === 'Perfil' ? 'active' : ''}`}>
        <a href="#" className="nav-link" onClick={() => handleClick('Perfil')}>
          <i className="bi bi-person-circle"></i>
          &nbsp; Perfil
        </a>
      </li>
    </>
  );

  const renderStudentMenu = () => (
    <>
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
    </>
  );

  return (
    <div className="aside shadow-sm bg-white d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-right" style={{ width: '250px' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        {userType === '1' && renderPsychologistMenu()}
        {userType === '2' && renderAdminMenu()}
        {userType === '3' && renderStudentMenu()}
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

export default Aside;

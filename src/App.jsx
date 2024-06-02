import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Aside from "./components/Aside"; 
import Calendario from './components/Calendario'; 
import Sesiones from './components/Sesiones';
import NuevosPacientes from './components/NuevosPacientes';
import Notificaciones from './components/Notificaciones';
import GestionTablas from './components/GestionTablas'; 
import NuevosPsicologos from './components/NuevosPsicologos'; 
import Perfil from './components/Perfil'; 

import './css/global.css';
import './css/Modal.css';

const App = () => {
  const getDefaultSection = (userType) => {
    switch (userType) {
      case 'admin':
        return 'Psicologos';
      case 'estudiante':
        return 'Sesiones';
      default:
        return 'MisPacientes';
    }
  };
  const [activeSection, setActiveSection] = useState(localStorage.getItem('activeSection') || 'MisPacientes');
  const [userType, setUserType] = useState(localStorage.getItem('userType') || 'psicologo');

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    localStorage.setItem('userType', userType);
    setActiveSection(getDefaultSection(userType));
  }, [userType]);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Calendario':
        return <Calendario />;
      case 'Sesiones':
        return <Sesiones />;
      case 'MisPacientes':
        return <GestionTablas userType={userType} />;
      case 'NuevosPacientes':
        return <NuevosPacientes />;
      case 'Notificaciones':
        return <Notificaciones />;
      case 'Psicologos':
        return <GestionTablas userType={userType} />;
      case 'NuevosPsicologos':
        return <NuevosPsicologos />;
      case 'Perfil':
        return <Perfil />;
      default:
        return <GestionTablas userType={userType} />;
    }
  };

  return (
    <div className="app">
      <Header userType={userType} />
      <Aside activeSection={activeSection} setActiveSection={setActiveSection} userType={userType} />
      <Main>
        {renderSection()}
      </Main>
      <div style={{ marginTop: '95px', marginLeft: '260px' }}>
        <select id="userTypeSelect" value={userType} onChange={handleUserTypeChange}>
          <option value="psicologo">Psicólogo</option>
          <option value="admin">Administrador</option>
          <option value="estudiante">Estudiante</option>
        </select>
      </div>
    </div>
  );
};

export default App;

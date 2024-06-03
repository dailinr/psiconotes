import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Aside from "./components/Aside"; 
import Calendario from './components/Calendario'; // Asegúrate de importar los componentes correctamente
import Sesiones from './components/Sesiones';
import MisPacientes from './components/MisPacientes';
import NuevosPacientes from './components/NuevosPacientes';
import Notificaciones from './components/Notificaciones';
import Psicologos from './components/Psicologos'; // Para el admin
import NuevosPsicologos from './components/NuevosPsicologos'; // Para el admin
import Perfil from './components/Perfil'; // Para el admin
import './css/global.css';
import './css/Modal.css';

<<<<<<< HEAD
function App() {
  const [activeSection, setActiveSection] = useState('MisPacientes');
=======
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
>>>>>>> main

  const renderSection = () => {
    switch (activeSection) {
      case 'Calendario':
        return <Calendario />;
      case 'Sesiones':
        return <Sesiones />;
      case 'MisPacientes':
        return <MisPacientes />;
      case 'NuevosPacientes':
        return <NuevosPacientes />;
      case 'Notificaciones':
        return <Notificaciones />;
      case 'Psicologos':
        return <Psicologos />;
      case 'NuevosPsicologos':
        return <NuevosPsicologos />;
      case 'Perfil':
        return <Perfil />;
      default:
        return <MisPacientes />;
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

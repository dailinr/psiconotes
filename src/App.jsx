import React, { useState } from 'react';
import './css/App.css';
import { Header } from './components/Header.jsx';
import { Aside } from './components/Aside.jsx';
import { Main } from './components/Main.jsx';
import { Sesiones } from './components/Sesiones.jsx';
import { Calendario } from './components/Calendario.jsx';
import { MisPacientes } from './components/MisPacientes.jsx';
import { NuevosPacientes } from './components/NuevosPacientes.jsx';
import { Notificaciones } from './components/Notificaciones.jsx';
import './css/global.css';

function App() {
  const [activeSection, setActiveSection] = useState('MisPacientes'); // Estado inicial

  // Función para renderizar la sección correspondiente según activeSection
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
      default:
        return <MisPacientes />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Aside setActiveSection={setActiveSection} activeSection={activeSection} /> {/* Paso el estado activo y función de actualización */}
      <Main>
        {renderSection()}
      </Main>
    </div>
  );
}

export default App;
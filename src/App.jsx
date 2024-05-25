import { useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('sesiones');

  const renderSection = () => {
    switch (activeSection) {
      case 'calendario':
        return <Calendario />;
      case 'sesiones':
        return <Sesiones />;
      case 'MisPacientes':
        return <MisPacientes />;
      case 'NuevosPacientes':
        return <NuevosPacientes />;
      case 'Notificaciones':
        return <Notificaciones />;
      default:
        return <Sesiones />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Aside setActiveSection={setActiveSection} />
      <Main>
        {renderSection()}
      </Main>
    </div>
  );
}

export default App;

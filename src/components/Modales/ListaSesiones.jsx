import React, { useState } from 'react';
import ModalAgendar from './ModalAgendar';
import FilaSesion from './FilaSesion';

const ListaSesiones = () => {
  const [pacientes, setPacientes] = useState([]);

  const handleAgendar = (nuevoPaciente) => {
    setPacientes([...pacientes, nuevoPaciente]);
  };

  return (
    <div>
      <ModalAgendar onAgendar={handleAgendar} />
      {pacientes.map((paciente, index) => (
        <FilaSesion key={index} paciente={paciente} />
      ))}
    </div>
  );
};

export default ListaSesiones;
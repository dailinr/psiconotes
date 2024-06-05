import React, { useState } from 'react';
import NuevoUsuario from './NuevoUsuario';

const NuevosPsicologos = () => {
  const [form, setForm] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    email: '',
    genero: '',
    contacto: '',
    contactoEmergencia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo psicólogo:', form);
    // Aquí deberías agregar la lógica para enviar los datos a la API o realizar alguna acción.
  };

  return (
    <NuevoUsuario
      userType="2" // Indicando que es para psicólogos
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default NuevosPsicologos;

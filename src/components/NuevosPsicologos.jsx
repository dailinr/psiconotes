import React, { useState } from 'react';
import NuevoUsuario from './NuevoUsuario';

const NuevosPsicologos = () => {
  const [form, setForm] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    email: '',
    edad: '',
    contacto: '',
    contactoEmergencia: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nuevoPsicologo = {
      nombre: `${form.primerNombre} ${form.segundoNombre}`,
      apellido: `${form.primerApellido} ${form.segundoApellido}`,
      estado: 'Activo',
      edad: form.edad, 
      telefono: form.contacto,
      usuario: {
        email: form.email,
        username: form.username,
        password: form.password,
        roles: [1, 2]
      }
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/psicologos/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPsicologo),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el psicólogo');
      }

      const data = await response.json();
      console.log('Nuevo psicólogo guardado:', data);

      // Limpiar el formulario
      setForm({
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        email: '',
        edad: '',
        contacto: '',
        contactoEmergencia: '',
        username: '',
        password: ''
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <NuevoUsuario
      userType="2"
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default NuevosPsicologos;

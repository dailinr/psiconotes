import React, { useState } from 'react';
import NuevoUsuario from './NuevoUsuario';
import Swal from 'sweetalert2';

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

  const generateUsername = (primerNombre, primerApellido) => {
    return `${primerNombre}.${primerApellido}`.toLowerCase();
  };

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = generateUsername(form.primerNombre, form.primerApellido);
    const password = generateRandomPassword();
    const nuevoPsicologo = {
      nombre: `${form.primerNombre} ${form.segundoNombre}`,
      apellido: `${form.primerApellido} ${form.segundoApellido}`,
      estado: 'Activo',
      edad: form.edad, 
      telefono: form.contacto,
      usuario: {
        email: form.email,
        username: username,
        password: password,
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

      Swal.fire({
        title: 'Éxito',
        text: `El psicólogo ha sido guardado exitosamente. Username: ${username}, Password: ${password}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
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
      // Mostrar alerta de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al guardar el paciente',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <NuevoUsuario
  userType='2'  // Para psicólogos
  form={form}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
   />
  );
};

export default NuevosPsicologos;

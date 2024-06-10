import React, { useState } from 'react';
import NuevoUsuario from './NuevoUsuario';
import Swal from 'sweetalert2';

const NuevosPacientes = () => {
  const [form, setForm] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    email: '',
    genero: '',
    grado: '',
    edad: '',
    contacto: '',
    nombreAcudiente: '',
    contactoEmergencia: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validaciones específicas para Nuevos Pacientes
    if (name === 'contacto' || name === 'contactoEmergencia') {
      const filteredValue = value.replace(/\D/g, ''); // Eliminar todo lo que no sea dígito
      if (filteredValue.length <= 10) {
        setForm({
          ...form,
          [name]: filteredValue,
        });
      }
      return;
    }

    // Permitir solo números y limitar a 2 caracteres para la edad
    if (name === 'edad') {
      const filteredValue = value.replace(/\D/g, '').slice(0, 2);
      setForm({
        ...form,
        [name]: filteredValue,
      });
      return;
    }

    // Validar que los inputs de texto no acepten números ni espacios
    if (['primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido', 'nombreAcudiente'].includes(name)) {
      const filteredValue = value.replace(/[0-9\s]/g, ''); // Eliminar números y espacios
      setForm({
        ...form,
        [name]: filteredValue,
      });
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nuevoPaciente = {
      nombre: `${form.primerNombre} ${form.segundoNombre}`,
      apellido: `${form.primerApellido} ${form.segundoApellido}`,
      edad: form.edad,
      genero: form.genero,
      email: form.email,
      telefono: form.contacto,
      acudiente: form.nombreAcudiente,
      telAcudiente: form.contactoEmergencia,
      estado: 'activa',
      usuario: {
        email: form.email,
        username: form.username,
        password: form.password,
        roles: [1, 3]
      }
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/pacientes/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPaciente),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el paciente');
      }

      const data = await response.json();
      console.log('Nuevo paciente guardado:', data);

      // Mostrar alerta de éxito
      Swal.fire({
        title: 'Éxito',
        text: 'El paciente ha sido guardado exitosamente',
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
        genero: '',
        grado: '',
        edad: '',
        contacto: '',
        nombreAcudiente: '',
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
      userType="1" // userType 1 para Pacientes
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default NuevosPacientes;

import React, { useState } from 'react';
import NuevoUsuario from './NuevoUsuario';

const NuevosPacientes = () => {
  const [form, setForm] = useState({
    primerNombre: '', segundoNombre: '', primerApellido: '', segundoApellido: '', email: '', genero: '', grado: '', contacto: '',
    nombreAcudiente: '', contactoEmergencia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validaciones específicas para Nuevos Pacientes
    if ((name === 'contacto' || name === 'contactoEmergencia')) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo paciente:', form);
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
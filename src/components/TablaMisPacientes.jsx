import React, { useState, useEffect } from 'react';
import Tabla from './Tabla';

const TablaMisPacientes = ({ searchTerm, setActiveSection, userType }) => {
  const [datosIniciales, setDatosIniciales] = useState([]);

  useEffect(() => {
    // Realizar la llamada a la API para obtener los pacientes
    fetch('http://localhost:8080/api/v1/pacientes')
      .then(response => response.json())
      .then(data => {
        // Transformar los datos recibidos de la API si es necesario
        const pacientes = data.map(paciente => ({
          id: paciente.id,
          nombre: paciente.nombre,
          apellidos: paciente.apellido, // Asegúrate de que el campo es correcto
          grado: paciente.grado || 'N/A', // Si no hay campo grado en los datos, puedes manejarlo así
          edad: paciente.edad,
          correo: paciente.email,
          genero: paciente.genero,
          institucion: paciente.institucion || 'N/A', // Si no hay campo institucion en los datos, puedes manejarlo así
          telefono: paciente.telefono,
          nombreAcudiente: paciente.acudiente,
          telefonoAcudiente: paciente.telAcudiente,
        }));
        setDatosIniciales(pacientes);
      })
      .catch(error => {
        console.error('Error al obtener los datos de pacientes:', error);
      });
  }, []);

  const columnas = [
    { titulo: 'Nombres', campo: 'nombre' },
    { titulo: 'Apellidos', campo: 'apellidos' },
    { titulo: 'Grado', campo: 'grado', align: 'center' },
    { titulo: 'Edad', campo: 'edad', align: 'center' },
    { titulo: 'Correo', campo: 'correo' },
  ];

  return <Tabla datosIniciales={datosIniciales} columnas={columnas} searchTerm={searchTerm} setActiveSection={setActiveSection} userType={userType}/>;
};

export default TablaMisPacientes;

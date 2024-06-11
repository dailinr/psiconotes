import React, { useState, useEffect } from 'react';
import Tabla from './Tabla';

const TablaMisPsicologos = ({ searchTerm, setActiveSection }) => {
  const [datosIniciales, setDatosIniciales] = useState([]);

  useEffect(() => {
    // Realizar la llamada a la API para obtener los psicólogos
    fetch('http://localhost:8080/api/v1/psicologos')
      .then(response => response.json())
      .then(data => {
        // Transformar los datos recibidos de la API si es necesario
        const psicologos = data.map(psicologo => ({
          id: psicologo.id,
          nombre: psicologo.nombre,
          apellidos: psicologo.apellido, // Asegúrate de que el campo es correcto
          estado: psicologo.estado,
          edad: psicologo.edad,
          correo: psicologo.email,
          telefono: psicologo.telefono,
        }));
        setDatosIniciales(psicologos);
      })
      .catch(error => {
        console.error('Error al obtener los datos de psicólogos:', error);
      });
  }, []);

  const columnas = [
    { titulo: 'Nombres', campo: 'nombre' },
    { titulo: 'Apellidos', campo: 'apellidos' },
    { titulo: 'Estado', campo: 'estado', align: 'center' },
    { titulo: 'Edad', campo: 'edad', align: 'center' },
    { titulo: 'Correo', campo: 'correo' },
  ];

  return <Tabla datosIniciales={datosIniciales} columnas={columnas} searchTerm={searchTerm} setActiveSection={setActiveSection} />;
};

export default TablaMisPsicologos;

import React from 'react';
import Tabla from './Tabla';

const TablaMisPsicologos = () => {
  const datosIniciales = [
    { id: 1, nombre: 'Dr. Juan Pérez', apellidos: 'González', estado: 'Activo', edad: 45, correo: 'dr.juan@example.com', telefono: '1234567890' },
    { id: 2, nombre: 'Dra. Ana López', apellidos: 'Martínez', estado: 'Inactivo', edad: 38, correo: 'dra.ana@example.com', telefono: '0987654321' },
    { id: 3, nombre: 'Dr. Carlos Sánchez', apellidos: 'López', estado: 'Activo', edad: 50, correo: 'dr.carlos@example.com', telefono: '1122334455' },
    { id: 4, nombre: 'Dra. María Fernández', apellidos: 'García', estado: 'Inactivo', edad: 42, correo: 'dra.maria@example.com', telefono: '2233445566' },
    { id: 5, nombre: 'Dr. Luis Martínez', apellidos: 'Rodríguez', estado: 'Activo', edad: 39, correo: 'dr.luis@example.com', telefono: '3344556677' },
    { id: 6, nombre: 'Dra. Elena Ramírez', apellidos: 'Hernández', estado: 'Inactivo', edad: 41, correo: 'dra.elena@example.com', telefono: '4455667788' },
    { id: 7, nombre: 'Dr. Miguel Torres', apellidos: 'Pérez', estado: 'Activo', edad: 48, correo: 'dr.miguel@example.com', telefono: '5566778899' },
    { id: 8, nombre: 'Dra. Patricia Gómez', apellidos: 'Sánchez', estado: 'Inactivo', edad: 36, correo: 'dra.patricia@example.com', telefono: '6677889900' },
    { id: 9, nombre: 'Dr. Javier Díaz', apellidos: 'Martínez', estado: 'Activo', edad: 44, correo: 'dr.javier@example.com', telefono: '7788990011' },
    { id: 10, nombre: 'Dra. Laura Hernández', apellidos: 'Gómez', estado: 'Inactivo', edad: 37, correo: 'dra.laura@example.com', telefono: '8899001122' }
  ];

  const columnas = [
    { titulo: 'No', campo: 'id' },
    { titulo: 'Nombres', campo: 'nombre' },
    { titulo: 'Apellidos', campo: 'apellidos' },
    { titulo: 'Estado', campo: 'estado', align: 'center' },
    { titulo: 'Edad', campo: 'edad', align: 'center' },
    { titulo: 'Correo', campo: 'correo' },
  ];

  return <Tabla datosIniciales={datosIniciales} columnas={columnas} />;
};

export default TablaMisPsicologos;

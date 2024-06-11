import React from 'react';
import Tabla from './Tabla';

const TablaMisPacientes = ({ searchTerm, setActiveSection }) => {
  const datosIniciales = [
    { id: 1, nombre: 'Sofía', apellidos: 'Ramírez Torres', grado: '2°', edad: 8, correo: 'sofia.ramirez@example.com', genero: 'Femenino', institucion: 'Escuela DEF', telefono: '9988776655', nombreAcudiente: 'Carla Torres', telefonoAcudiente: '5566778899' },
    { id: 2, nombre: 'Miguel', apellidos: 'Hernández Gómez', grado: '1°', edad: 7, correo: 'miguel.h@example.com', genero: 'Masculino', institucion: 'Escuela GHI', telefono: '8877665544', nombreAcudiente: 'Luis Hernández', telefonoAcudiente: '4455667788' },
    { id: 3, nombre: 'Lucía', apellidos: 'Martínez Díaz', grado: '4°', edad: 11, correo: 'lucia.martinez@example.com', genero: 'Femenino', institucion: 'Instituto JKL', telefono: '7766554433', nombreAcudiente: 'Ana Díaz', telefonoAcudiente: '3344556677' },
    { id: 4, nombre: 'Diego', apellidos: 'López García', grado: '3°', edad: 9, correo: 'diego.lopez@example.com', genero: 'Masculino', institucion: 'Colegio MNO', telefono: '6655443322', nombreAcudiente: 'José López', telefonoAcudiente: '2233445566' },
    { id: 5, nombre: 'Camila', apellidos: 'González Pérez', grado: '5°', edad: 10, correo: 'camila.gonzalez@example.com', genero: 'Femenino', institucion: 'Escuela PQR', telefono: '5544332211', nombreAcudiente: 'María Pérez', telefonoAcudiente: '1122334455' },
    { id: 6, nombre: 'Juan', apellidos: 'Ramírez López', grado: '6°', edad: 12, correo: 'juan.ramirez@example.com', genero: 'Masculino', institucion: 'Instituto STU', telefono: '4433221100', nombreAcudiente: 'Pedro Ramírez', telefonoAcudiente: '9988776655' },
    { id: 7, nombre: 'Valentina', apellidos: 'Díaz Martínez', grado: '1°', edad: 6, correo: 'valentina.diaz@example.com', genero: 'Femenino', institucion: 'Colegio VWX', telefono: '3322110099', nombreAcudiente: 'Laura Martínez', telefonoAcudiente: '8877665544' },
    { id: 8, nombre: 'Santiago', apellidos: 'Gómez Sánchez', grado: '2°', edad: 7, correo: 'santiago.gomez@example.com', genero: 'Masculino', institucion: 'Escuela YZ', telefono: '2211009988', nombreAcudiente: 'Carlos Gómez', telefonoAcudiente: '7766554433' },
    { id: 9, nombre: 'Isabella', apellidos: 'Torres Rodríguez', grado: '3°', edad: 9, correo: 'isabella.torres@example.com', genero: 'Femenino', institucion: 'Instituto ABC', telefono: '1100998877', nombreAcudiente: 'Sandra Rodríguez', telefonoAcudiente: '6655443322' },
    { id: 0, nombre: 'Mateo', apellidos: 'Martínez López', grado: '4°', edad: 10, correo: 'mateo.martinez@example.com', genero: 'Masculino', institucion: 'Colegio DEF', telefono: '0099887766', nombreAcudiente: 'Ricardo Martínez', telefonoAcudiente: '5544332211' }
  ];

  const columnas = [
    { titulo: 'No', campo: 'id' },
    { titulo: 'Nombres', campo: 'nombre' },
    { titulo: 'Apellidos', campo: 'apellidos' },
    { titulo: 'Grado', campo: 'grado', align: 'center' },
    { titulo: 'Edad', campo: 'edad', align: 'center' },
    { titulo: 'Correo', campo: 'correo' },
  ];

  return <Tabla datosIniciales={datosIniciales} columnas={columnas} searchTerm={searchTerm} setActiveSection={setActiveSection} />;
};

export default TablaMisPacientes;

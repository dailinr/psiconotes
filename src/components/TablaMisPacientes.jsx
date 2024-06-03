import React, { useState } from 'react';
import ModalMasInfo from './Modales/ModalMasInfo';
import ModalEditarPac from './Modales/ModalEditarPac';
import './../css/Tabla.css';

const TablaMisPacientes = () => {
  const datosIniciales = [
    { id: 1, nombre: 'Pablo Felipe', apellidos: 'Piccaso Martínez', grado: '5°', edad: 15, correo: 'soytubebe@gmail.com', genero: 'Masculino', institucion: 'Instituto XYZ', telefono: '1234567890', nombreAcudiente: 'María Piccaso', telefonoAcudiente: '0987654321' },
    { id: 2, nombre: 'Nombre', apellidos: 'Apellidos', grado: 'Grado', edad: 10, correo: 'correo@ejemplo.com', genero: 'Femenino', institucion: 'Instituto ABC', telefono: '1122334455', nombreAcudiente: 'Juan Pérez', telefonoAcudiente: '5566778899' },
    { id: 3, nombre: 'Ana', apellidos: 'González Pérez', grado: '3°', edad: 12, correo: 'anagonzalez@gmail.com', genero: 'Femenino', institucion: 'Colegio PQR', telefono: '9876543210', nombreAcudiente: 'Pedro González', telefonoAcudiente: '6789054321' },
    { id: 4, nombre: 'Carlos', apellidos: 'López Sánchez', grado: '6°', edad: 13, correo: 'clopez@example.com', genero: 'Masculino', institucion: 'Escuela LMN', telefono: '9998887776', nombreAcudiente: 'Luisa Sánchez', telefonoAcudiente: '1122334455' },
    { id: 5, nombre: 'María', apellidos: 'Martínez García', grado: '4°', edad: 11, correo: 'mmartinez@email.com', genero: 'Femenino', institucion: 'Colegio ABC', telefono: '3334445556', nombreAcudiente: 'José Martínez', telefonoAcudiente: '6549873210' },
    { id: 6, nombre: 'Juan', apellidos: 'Rodríguez Pérez', grado: '5°', edad: 14, correo: 'jrodriguez@example.com', genero: 'Masculino', institucion: 'Escuela XYZ', telefono: '7776665554', nombreAcudiente: 'Laura Pérez', telefonoAcudiente: '9876543210' },
    { id: 7, nombre: 'Luis', apellidos: 'Gómez Fernández', grado: '2°', edad: 9, correo: 'lgomez@email.com', genero: 'Masculino', institucion: 'Colegio DEF', telefono: '4445556667', nombreAcudiente: 'Ana Fernández', telefonoAcudiente: '7654321098' },
    { id: 8, nombre: 'Lucía', apellidos: 'Sánchez Rodríguez', grado: '6°', edad: 13, correo: 'lsanchez@example.com', genero: 'Femenino', institucion: 'Escuela LMN', telefono: '8887776665', nombreAcudiente: 'Pedro Rodríguez', telefonoAcudiente: '1122334455' },
    { id: 9, nombre: 'José', apellidos: 'Pérez Martínez', grado: '4°', edad: 11, correo: 'jperez@example.com', genero: 'Masculino', institucion: 'Colegio PQR', telefono: '3334445558', nombreAcudiente: 'María Martínez', telefonoAcudiente: '6549873210' },
    { id: 10, nombre: 'Laura', apellidos: 'González López', grado: '3°', edad: 10, correo: 'lgonzalez@email.com', genero: 'Femenino', institucion: 'Escuela XYZ', telefono: '7776665553', nombreAcudiente: 'Juan López', telefonoAcudiente: '9876543210' },
  ];
  
  const filasPorPagina = 7;
  const [paginaActual, setPaginaActual] = useState(1);
  const [datos, setDatos] = useState(datosIniciales);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [modalEditarAbierto, setModalEditarAbierto] = useState(false);

  const indiceUltimaFila = paginaActual * filasPorPagina;
  const indicePrimeraFila = indiceUltimaFila - filasPorPagina;
  const filasActuales = datos.slice(indicePrimeraFila, indiceUltimaFila);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const numeroPaginas = Math.ceil(datos.length / filasPorPagina);
  const paginas = [];
  for (let i = 1; i <= numeroPaginas; i++) {
    paginas.push(i);
  }

  const handleOpenModalMasInfo = (paciente) => {
    setPacienteSeleccionado(paciente);
  };

  const handleCloseModalMasInfo = () => {
    setPacienteSeleccionado(null);
  };

  const handleOpenModalEditarPac = () => {
    setModalEditarAbierto(true);
  };

  const handleCloseModalEditarPac = () => {
    setModalEditarAbierto(false);
  };

  const handleSavePacienteEditado = (updatedPaciente) => {
    setDatos(datos.map(paciente => paciente.id === updatedPaciente.id ? updatedPaciente : paciente));
    setModalEditarAbierto(false);
    setPacienteSeleccionado(null);
  };

  return (
    <div className="tabla-contenedor">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th style={{ textAlign: 'center' }}>Grado</th>
            <th style={{ textAlign: 'center' }}>Edad</th>
            <th>Correo</th>
            <th>Más información</th>
          </tr>
        </thead>
        <tbody>
          {filasActuales.map((fila, indice) => (
            <tr key={fila.id}>
              <td>{String(indicePrimeraFila + indice + 1).padStart(2, '0')}</td>
              <td>{fila.nombre}</td>
              <td>{fila.apellidos}</td>
              <td style={{ textAlign: 'center' }}>{fila.grado}</td>
              <td style={{ textAlign: 'center' }}>{fila.edad}</td>
              <td>{fila.correo}</td>
              <td style={{ textAlign: 'center' }}>
                <button className="boton-info" onClick={() => handleOpenModalMasInfo(fila)}>Más</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginacion">
        {paginas.map((numero) => (
          <span
            key={numero}
            onClick={() => cambiarPagina(numero)}
            className={numero === paginaActual ? 'activo' : ''}
          >
            ●
          </span>
        ))}
      </div>
      {pacienteSeleccionado && (
        <ModalMasInfo
          info={pacienteSeleccionado}
          onClose={handleCloseModalMasInfo}
          onEdit={handleOpenModalEditarPac}
        />
      )}
      {modalEditarAbierto && pacienteSeleccionado && (
        <ModalEditarPac
          info={pacienteSeleccionado}
          onClose={handleCloseModalEditarPac}
          onSave={handleSavePacienteEditado}
        />
      )}
    </div>
  );
};

export default TablaMisPacientes;

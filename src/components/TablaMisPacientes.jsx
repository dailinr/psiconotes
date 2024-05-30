import React, { useState } from 'react';
import ModalMasInfo from './ModalMasInfo';
import ModalEditarPac from './ModalEditarPac';
import './../css/Tabla.css';

const TablaMisPacientes = () => {
  const datosIniciales = [
    { id: 1, nombre: 'Pablo Felipe', apellidos: 'Piccaso Martínez', grado: '5°', edad: 15, correo: 'soytubebe@gmail.com', genero: 'Masculino', institucion: 'Instituto XYZ', telefono: '1234567890', nombreAcudiente: 'María Piccaso', telefonoAcudiente: '0987654321' },
    { id: 2, nombre: 'Nombre', apellidos: 'Apellidos', grado: 'Grado', edad: 10, correo: 'correo@ejemplo.com', genero: 'Femenino', institucion: 'Instituto ABC', telefono: '1122334455', nombreAcudiente: 'Juan Pérez', telefonoAcudiente: '5566778899' },
    // Agrega más datos según sea necesario
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

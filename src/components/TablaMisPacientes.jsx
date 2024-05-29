import React, { useState } from 'react';
import './../css/Tabla.css';
import ModalMasInfo from './ModalMasInfo'; 

const TablaMisPacientes = () => {
  const datos = [
    { id: 1, nombre: 'Pablo Felipe', apellidos: 'Piccaso Martínez', grado: '5°', edad: 15, correo: 'soytubebe@gmail.com' },
    { id: 2, nombre: 'Juan', apellidos: 'Pérez', grado: '3°', edad: 14, correo: 'juan.perez@example.com' },
    { id: 3, nombre: 'María', apellidos: 'López', grado: '6°', edad: 16, correo: 'maria.lopez@example.com' },
    { id: 4, nombre: 'Carlos', apellidos: 'García', grado: '4°', edad: 14, correo: 'carlos.garcia@example.com' },
    { id: 5, nombre: 'Ana', apellidos: 'Martínez', grado: '5°', edad: 15, correo: 'ana.martinez@example.com' },
    { id: 6, nombre: 'Luis', apellidos: 'Hernández', grado: '3°', edad: 14, correo: 'luis.hernandez@example.com' },
    { id: 7, nombre: 'Elena', apellidos: 'Gómez', grado: '6°', edad: 16, correo: 'elena.gomez@example.com' },
    { id: 8, nombre: 'Sofía', apellidos: 'Rodríguez', grado: '4°', edad: 14, correo: 'sofia.rodriguez@example.com' },
  ];

  const filasPorPagina = 7;
  const [paginaActual, setPaginaActual] = useState(1);
  const [mostrarModal, setMostrarModal] = useState(false); 
  const [infoModal, setInfoModal] = useState(null); 

  const indiceUltimaFila = paginaActual * filasPorPagina;
  const indicePrimeraFila = indiceUltimaFila - filasPorPagina;
  const filasActuales = datos.slice(indicePrimeraFila, indiceUltimaFila);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const abrirModal = (fila) => {
    setInfoModal(fila);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setInfoModal(null);
  };

  const numeroPaginas = Math.ceil(datos.length / filasPorPagina);
  const paginas = [];
  for (let i = 1; i <= numeroPaginas; i++) {
    paginas.push(i);
  }

  return (
    <div className="tabla-contenedor">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th style={{textAlign: 'center'}}>Grado</th>
            <th style={{textAlign: 'center'}}>Edad</th>
            <th>Correo</th>
            <th>Más información</th>
          </tr>
        </thead>
        <tbody>
          {filasActuales.map((fila, indice) => (
            <tr key={indice}>
              <td>{String(indicePrimeraFila + indice + 1).padStart(2, '0')}</td>
              <td>{fila.nombre}</td>
              <td>{fila.apellidos}</td>
              <td style={{textAlign: 'center'}}>{fila.grado}</td>
              <td style={{textAlign: 'center'}}>{fila.edad}</td>
              <td>{fila.correo}</td>
              <td style={{textAlign: 'center'}}>
                <button className="boton-info" onClick={() => abrirModal(fila)}>Más</button>
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
      {mostrarModal && (
        <ModalMasInfo
          info={infoModal}
          onClose={cerrarModal}
        />
      )}
    </div>
  );
};

export default TablaMisPacientes;

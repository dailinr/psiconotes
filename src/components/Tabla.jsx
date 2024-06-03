import React, { useState } from 'react';
import ModalMasInfo from './Modales/ModalMasInfo';
import ModalEditarPac from './Modales/ModalEditarPac';
import './../css/Tabla.css';

const Tabla = ({ datosIniciales, columnas, filasPorPagina = 6 }) => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [datos, setDatos] = useState(datosIniciales);
  const [seleccionado, setSeleccionado] = useState(null);
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

  const handleOpenModalMasInfo = (item) => {
    setSeleccionado(item);
  };

  const handleCloseModalMasInfo = () => {
    setSeleccionado(null);
  };

  const handleOpenModalEditar = () => {
    setModalEditarAbierto(true);
  };

  const handleCloseModalEditar = () => {
    setModalEditarAbierto(false);
  };

  const handleSaveEditado = (updatedItem) => {
    setDatos(datos.map(item => item.id === updatedItem.id ? updatedItem : item));
    setModalEditarAbierto(false);
    setSeleccionado(null);
  };

  return (
    <div className="tabla-contenedor">
      <table>
        <thead>
          <tr>
            {columnas.map((col, index) => (
              <th key={index} style={{ textAlign: col.align || 'left' }}>{col.titulo}</th>
            ))}
            <th>Más información</th>
          </tr>
        </thead>
        <tbody>
          {filasActuales.map((fila, indice) => (
            <tr key={fila.id}>
              {columnas.map((col, index) => (
                <td key={index} style={{ textAlign: col.align || 'left' }}>{fila[col.campo]}</td>
              ))}
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
      {seleccionado && (
        <ModalMasInfo
          info={seleccionado}
          onClose={handleCloseModalMasInfo}
          onEdit={handleOpenModalEditar}
        />
      )}
      {modalEditarAbierto && seleccionado && (
        <ModalEditarPac
          info={seleccionado}
          onClose={handleCloseModalEditar}
          onSave={handleSaveEditado}
        />
      )}
    </div>
  );
};

export default Tabla;

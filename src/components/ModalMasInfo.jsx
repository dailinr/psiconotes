import React, { useState } from 'react';
import './../css/Modal.css';
import ModalEditarPac from './ModalEditarPac'; 

const ModalMasInfo = ({ info }) => {
  const [editarModalAbierto, setEditarModalAbierto] = useState(false); 

  const handleEditar = () => {
    setEditarModalAbierto(true); // Abrir el modal de edición al hacer clic en "Editar"
  };

  return (
    <div className="modal-container">
      <div className="modal-backdrop">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Más información</h5>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p><strong>Nombre:</strong> {info.nombre}</p>
              <p><strong>Edad:</strong> {info.edad}</p>
              <p><strong>Grado:</strong> {info.grado}</p>
              <p><strong>Género:</strong> {info.genero}</p>
              <p><strong>Institución:</strong> {info.institucion}</p>
              <p><strong>Correo:</strong> {info.correo}</p>
              <p><strong>Teléfono:</strong> {info.telefono}</p>
              <p><strong>Nombre Acudiente:</strong> {info.nombreAcudiente}</p>
              <p><strong>Teléfono Acudiente:</strong> {info.telefonoAcudiente}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" >Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleEditar}>Editar</button>
            </div>
          </div>
        </div>
      </div>
      {editarModalAbierto && ( // Mostrar el modal de edición si editarModalAbierto es true
        <ModalEditarPac
          paciente={info}
          onSave={() => {
            
          }}
          onClose={() => setEditarModalAbierto(false)} // Cerrar el modal de edición
        />
      )}
    </div>
  );
};

export default ModalMasInfo;

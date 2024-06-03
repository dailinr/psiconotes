import React from 'react';

const ModalMasInfo = ({ info, onClose, onEdit }) => {
  if (!info) return null;

  return (
    <div className="modal-container">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Más información</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p><strong>Nombre:</strong> {info.nombre}</p>
            <p><strong>Apellidos:</strong> {info.apellidos}</p>
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
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={onEdit}>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMasInfo;

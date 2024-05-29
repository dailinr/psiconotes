import React from 'react';
import './../css/Modal.css';

const ModalEditarPac = ({ paciente, onSave, onClose }) => {
  const handleSave = () => {
    onSave(); 
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar información</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" className="form-control" defaultValue={paciente.nombre} />
              </div>
              <div className="form-group">
                <label htmlFor="edad">Edad:</label>
                <input type="text" id="edad" className="form-control" defaultValue={paciente.edad} />
              </div>
              <div className="form-group">
                <label htmlFor="grado">Grado:</label>
                <input type="text" id="grado" className="form-control" defaultValue={paciente.grado} />
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo:</label>
                <input type="email" id="correo" className="form-control" defaultValue={paciente.correo} />
              </div>
              {/* Faltan inputs */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarPac;

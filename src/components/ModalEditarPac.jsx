import React, { useState } from 'react';
import './../css/Modal.css';

const ModalEditarPac = ({ info, onClose, onSave }) => {
  const [formData, setFormData] = useState(info);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!formData) return null;

  return (
    <div className="modal-container">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar información</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-item">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} />
                </div>
                <div className="input-item">
                  <label className="form-label">Apellidos</label>
                  <input type="text" className="form-control" name="apellidos" value={formData.apellidos} onChange={handleChange} />
                </div>
              </div>
              <div className="input-group">
                <div className="input-item">
                  <label className="form-label">Grado</label>
                  <input type="text" className="form-control" name="grado" value={formData.grado} onChange={handleChange} />
                </div>
                <div className="input-item">
                  <label className="form-label">Edad</label>
                  <input type="number" className="form-control" name="edad" value={formData.edad} onChange={handleChange} />
                </div>
              </div>
              <div className="input-group">
                <div className="input-item">
                  <label className="form-label">Correo</label>
                  <input type="email" className="form-control" name="correo" value={formData.correo} onChange={handleChange} />
                </div>
                <div className="input-item">
                  <label className="form-label">Género</label>
                  <input type="text" className="form-control" name="genero" value={formData.genero} onChange={handleChange} />
                </div>
              </div>
              <div className="input-group">
                <div className="input-item">
                  <label className="form-label">Institución</label>
                  <input type="text" className="form-control" name="institucion" value={formData.institucion} onChange={handleChange} />
                </div>
                <div className="input-item">
                  <label className="form-label">Teléfono</label>
                  <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} />
                </div>
              </div>
              <div className="input-group">
                <div className="input-item">
                  <label className="form-label">Nombre Acudiente</label>
                  <input type="text" className="form-control" name="nombreAcudiente" value={formData.nombreAcudiente} onChange={handleChange} />
                </div>
                <div className="input-item">
                  <label className="form-label">Teléfono Acudiente</label>
                  <input type="text" className="form-control" name="telefonoAcudiente" value={formData.telefonoAcudiente} onChange={handleChange} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarPac;

import React, { useState } from 'react';

export const ModalInforme = ({ onClose, show, onSave }) => {
  const [observacion, setObservacion] = useState('');

  const handleObservacionChange = (event) => {
    setObservacion(event.target.value);
  };

  const handleAddClick = () => {
    if (observacion.trim()) {
      enviarObservacion(observacion);
      onSave(observacion); 
      alert('La observación es obligatoria');
    }
  }

  const enviarObservacion = (observacion) => {
    fetch('/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ observaciones: observacion }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="modal-container">
        <div className="modal-backdrop" />
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agregar Informe</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <p style={{ color: 'black', fontWeight: '500', fontSize: '19px' }}>Observaciones</p>
              <textarea
                className="form-control"
                id="observaciones"
                rows="5"
                value={observacion}
                onChange={handleObservacionChange}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleAddClick}>Añadir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

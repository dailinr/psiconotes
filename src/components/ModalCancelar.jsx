import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Asegúrate de importar la localización en español
import './../css/Modal.css';

const ModalCancelar = ({ event, onClose, onCancel }) => {
  const [reason, setReason] = useState('');

  return (
    <div className="modal-container">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{event.title}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p style={{ fontWeight: 'bold' }}>Estudiante:</p>
            <p>{event.id}</p>
            <div className="event-info">
              <div>
                <p style={{ fontWeight: 'bold' }}>Fecha:</p>
                <p>{dayjs(event.start).format('DD/MM/YYYY')}</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold' }}>Hora de la cita:</p>
                <p>{dayjs(event.start).format('HH:mm')} - {dayjs(event.end).format('HH:mm')}</p>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label" style={{ fontWeight: 'bold' }}>Motivo</label>
              <textarea className="form-control" id="reason" rows="3" value={reason} onChange={(e) => setReason(e.target.value)}
                placeholder="..."></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={() => onCancel(event.id, reason)}>Cancelar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelar;

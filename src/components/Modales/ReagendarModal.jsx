import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; 

const ReagendarModal = ({ event, onClose, onSave }) => {
  const [date, setDate] = useState(dayjs(event.start).format('YYYY-MM-DD'));
  const [startTime, setStartTime] = useState(dayjs(event.start).format('HH:mm'));
  const [endTime, setEndTime] = useState(dayjs(event.end).format('HH:mm'));
  const [reason, setReason] = useState(event.reason || '');

  const handleSave = () => {
    const newStart = dayjs(`${date} ${startTime}`).toDate();
    const newEnd = dayjs(`${date} ${endTime}`).toDate();
    const updatedEvent = {
      ...event,
      start: newStart,
      end: newEnd,
      reason,
    };

    fetch(`http://localhost:8080/psicoNote/v1/sesion/actualizar/${updatedEvent.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEvent),
    })
      .then(response => response.json())
      .then(data => {
        // Llamar a la función onSave para actualizar localmente el evento
        onSave(updatedEvent);
        onClose(); // Cerrar el modal después de actualizar
      })
      .catch(error => console.error('Error al reagendar sesión:', error));
  };

  return (
    <div className="modal-container">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Reagendar {event.title}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="date" className="form-label" style={{ fontWeight: 'bold' }}>Fecha</label>
              <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label" style={{ fontWeight: 'bold' }}>Inicio de la cita</label>
              <input type="time" className="form-control" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endTime" className="form-label" style={{ fontWeight: 'bold' }}>Fin de la cita</label>
              <input type="time" className="form-control" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label" style={{ fontWeight: 'bold' }}>Motivo</label>
              <textarea className="form-control" id="reason" rows="3" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="..."
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReagendarModal;

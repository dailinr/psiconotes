import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; 
import Swal from 'sweetalert2';

const ModalCancelar = ({ event, onClose, onCancel, userType }) => {
  const [reason, setReason] = useState('');

  const handleCancelEvent = () => {
    if (!reason.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Todos los campos son requeridos para cancelar la sesión.',
      });
      return;
    }
    const userTypeInt = parseInt(userType, 10);
    console.log('u',userType);
    if (userTypeInt === 3) {
      Swal.fire({
        icon: 'info',
        title: 'Solicitud recibida',
        text: 'Tu solicitud para cancelar la sesión ha sido enviada correctamente.',
      });
      onClose();
    } else {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Quieres cancelar esta sesión?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cancelar!',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:8080/psicoNote/v1/sesion/eliminarSesion/${event.id}`, {
            method: 'DELETE',
          })
          .then(response => {
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: '¡Cancelación exitosa!',
                text: `Sesión con ID ${event.paciente} cancelada correctamente.`,
              });
              onCancel(event.id, reason);
              onClose();
            } else {
              throw new Error(`Error al cancelar sesión: ${response.status} - ${response.statusText}`);
            }
          })
          .catch(error => {
            console.error(`Error al cancelar sesión con ID ${event.id}:`, error);
          });
        } 
      });
    }
  };
  
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
            <p>{event.title}</p>
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
                placeholder="Por favor, indica el motivo de la cancelación"></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            {userType !== 3 && // Solo mostrar el botón de cancelar si no es paciente
              <button type="button" className="btn btn-primary" onClick={handleCancelEvent}>Cancelar Sesión</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelar;

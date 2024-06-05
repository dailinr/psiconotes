import React, { useState } from 'react';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

const ReagendarModal = ({ event, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    date: dayjs(event.start).format('YYYY-MM-DD'),
    startTime: dayjs(event.start).format('HH:mm:ss'),
    endTime: dayjs(event.end).format('HH:mm:ss'),
    lugarSesion: event.lugarSesion,
    reason: '',
    idPaciente: event.paciente,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    if (id === 'startTime' || id === 'endTime') {// Asegurar que las horas tengan el formato hh:mm:ss
      setFormData({ ...formData, [id]: `${value}:00` });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleUpdateEvent = () => {
    if (formData.date.trim() !== '' && formData.startTime.trim() !== '' && formData.endTime.trim() !== '') {
      const formattedDate = formData.date.split('-').reverse().join('/');
      const updatedSession = {
        fecha: formattedDate,
        horaInicio: formData.startTime,
        horaFinal: formData.endTime,
        lugarSesion: formData.lugarSesion,
        idPsicologo: event.idPsicologo,
        idPaciente: event.idPaciente,
        estado: {
          nombreEstado: event.estado
        }
      };
  
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Quieres actualizar esta sesión?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, actualizar!',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:8080/psicoNote/v1/sesion/actualizar/${event.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedSession),
          })
          .then(response => response.json())
          .then(data => {
            Swal.fire({
              icon: 'success',
              title: '¡Actualización exitosa!',
              text: 'La sesión ha sido actualizada correctamente.',
            });
            onSave(formData);
            onClose();
          })
          .catch(error => console.error('Error al actualizar sesión:', error));
        } else {
          console.log("Actualización de sesión cancelada por el usuario.");
        }
      });
    } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Todos los campos son requeridos para reagendar una sesión.',
        });
      }
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
              <div className="form-group row">
                <label htmlFor="paciente" className="col-sm-4 col-form-label" style={{ fontWeight: 'bold' }}>Estudiante:</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="idPaciente" value={formData.idPaciente} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="date" className="col-sm-4 col-form-label" style={{ fontWeight: 'bold' }}>Fecha:</label>
                <div className="col-sm-8">
                  <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange}/>
                </div>
              </div>
            </div>
            <div className="mb-3 event-info">
              <div style={{ marginRight: '10px' }}>
                <label htmlFor="startTime" className="form-label" style={{ fontWeight: 'bold' }}>Inicio de la cita:</label>
                <input type="time" className="form-control" id="startTime" value={formData.startTime} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="endTime" className="form-label" style={{ fontWeight: 'bold' }}>Fin de la cita:</label>
                <input type="time" className="form-control" id="endTime" value={formData.endTime} onChange={handleChange}/>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-group row">
                <label htmlFor="lugarSesion" className="col-sm-4 col-form-label" style={{ fontWeight: 'bold' }}>Lugar de la sesión:</label>
                <div className="col-sm-8">
                  <textarea className="form-control" id="lugarSesion" value={formData.lugarSesion} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="reason" className="col-sm-4 col-form-label" style={{ fontWeight: 'bold' }}>Motivo:</label>
                <div className="col-sm-8">
                  <textarea className="form-control" id="reason" rows="3" value={formData.reason} onChange={handleChange} placeholder="..."/>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={handleUpdateEvent}>Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReagendarModal;

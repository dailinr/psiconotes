import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ModalAgendar = ({ onClose, onAgendar, userType }) => {
  const [formData, setFormData] = useState({
    student: '',
    date: '',
    startTime: '',
    endTime: '',
    lugarSesion: '',
    reason:'p'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    const { id, value } = e.target;
    // Asegurar que las horas tengan el formato hh:mm:ss
    if (id === 'startTime' || id === 'endTime') {
      setFormData({ ...formData, [id]: `${value}:00` });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleAgendar = () => {
    if (formData.student.trim() !== '' && formData.date.trim() !== '' && formData.startTime.trim() !== '' && formData.endTime.trim() !== '') {
      const formattedDate = formData.date.split('-').reverse().join('/');

      // Construir el objeto de sesión para enviar al backend
      const newSession = {
        fecha: formattedDate,
        horaInicio: formData.startTime,
        horaFinal: formData.endTime,
        lugarSesion: formData.lugarSesion,
        idPsicologo: userType, 
        idPaciente: parseInt(formData.student, 10),
        estado: {
          nombreEstado: 'agendada'
        }
      };
  
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Quieres agendar esta sesión?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, agendar!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch('http://localhost:8080/psicoNote/v1/sesion/guardar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSession),
          })
          .then(response => response.json())
          .then(data => {
            Swal.fire({
              icon: 'success',
              title: '¡Sesión agendada!',
              text: 'La sesión ha sido agendada correctamente.',
            });

            onAgendar(formData);
            setFormData({
              student: '',
              date: '',
              startTime: '',
              endTime: '',
              lugarSesion: ''
            });
          })
          .catch(error => console.error('Error al guardar sesión:', error));
          onClose();
        } 
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son requeridos para agendar una sesión.',
      });
    }
  };
  
  return (
    <div className="modal-container">
      <div className="modal-backdrop"></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agendar una sesión</h5>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="student" className="form-label">Estudiante</label>
              <input type="text" className="form-control" id="student" value={formData.student} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Fecha</label>
              <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label">Inicio de la cita</label>
              <input type="time" className="form-control" id="startTime" value={formData.startTime} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="endTime" className="form-label">Fin de la cita</label>
              <input type="time" className="form-control" id="endTime" value={formData.endTime} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="lugarSesion" className="form-label">Lugar de la sesión</label>
              <textarea className="form-control" id="lugarSesion" value={formData.lugarSesion} onChange={handleChange}></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={handleAgendar}>Agendar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAgendar;
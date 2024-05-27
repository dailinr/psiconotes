import React, { useState } from 'react';

const ModalAgendar = ({ onClose, onAgendar }) => {
  const [formData, setFormData] = useState({
    student: '',
    date: '',
    startTime: '',
    endTime: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleAgendar = () => {
    if (formData.student.trim() !== '' && formData.date.trim() !== '' && formData.startTime.trim() !== '' && formData.endTime.trim() !== '') {
      onAgendar(formData);
      setFormData({
        student: '',
        date: '',
        startTime: '',
        endTime: '',
        reason: ''
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
              <label htmlFor="reason" className="form-label">Motivo</label>
              <textarea className="form-control" id="reason" rows="3" value={formData.reason} onChange={handleChange}></textarea>
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

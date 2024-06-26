import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; 

const ModalEvento = ({ event, onClose, onReagendar, onCancelarSesion }) => {
  if (!event) return null;

  // Formatea la fecha y hora usando dayjs
  const startDate = dayjs(event.start).locale('es');
  const endDate = dayjs(event.end).locale('es');

  // Obtiene el nombre del día con la primera letra en mayúscula
  const capitalizedStartDay = startDate.format('dddd').charAt(0).toUpperCase() + startDate.format('dddd').slice(1);
  const capitalizedEndDay = endDate.format('dddd').charAt(0).toUpperCase() + endDate.format('dddd').slice(1);

  // Obtiene el nombre del mes con la primera letra en mayúscula
  const capitalizedStartMonth = startDate.format('MMMM').charAt(0).toUpperCase() + startDate.format('MMMM').slice(1);
  const capitalizedEndMonth = endDate.format('MMMM').charAt(0).toUpperCase() + endDate.format('MMMM').slice(1);

  // Formatea la fecha completa
  const formattedStartDate = `${capitalizedStartDay} ${startDate.format('D [de]')} ${capitalizedStartMonth} ${startDate.format('YYYY h:mm:ss A')}`;
  const formattedEndDate = `${capitalizedEndDay} ${endDate.format('D [de]')} ${capitalizedEndMonth} ${endDate.format('YYYY h:mm:ss A')}`;

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
            <p style={{fontWeight: 'bold'}}>Inicio:</p> <p>{formattedStartDate}</p>
            <p style={{fontWeight: 'bold'}}>Fin:</p> <p>{formattedEndDate}</p>
            <p style={{fontWeight: 'bold'}}>Lugar de la sesión:</p> <p>{event.lugarSesion}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button type="button" className="btn btn-danger" onClick={onCancelarSesion}>Cancelar Sesión</button>
            <button type="button" className="btn btn-primary" onClick={onReagendar}>Reagendar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEvento;

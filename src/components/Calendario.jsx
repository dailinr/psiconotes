import React, { useState, useEffect } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ModalEvento from './Modales/ModalEvento';
import ModalCancelar from './Modales/ModalCancelar';
import ModalAgendar from './Modales/ModalAgendar';
import ReagendarModal from './Modales/ReagendarModal';
import './../css/Calendario.css';
import './../css/Modal.css';

dayjs.locale('es');

const Calendario = ({ userType }) => {
  const localizer = dayjsLocalizer(dayjs);

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isReagendarModalOpen, setIsReagendarModalOpen] = useState(false);
  const [isCancelarModalOpen, setIsCancelarModalOpen] = useState(false);
  const [isAgendarModalOpen, setIsAgendarModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/psicoNote/v1/sesion')
      .then(response => response.json())
      .then(data => {
        const filteredSessions = data.filter(session => {
          return session.psicologo && session.psicologo.id.toString() === userType.toString();
        });
        const formattedEvents = filteredSessions.map(session => ({
          id: session.id,
          start: dayjs(`${session.fecha}T${session.horaInicio}`).toDate(),
          end: dayjs(`${session.fecha}T${session.horaFinal}`).toDate(),
          title: `Cita con ${session.paciente.nombre}`,
          reason: '',
          lugarSesion: session.lugarSesion,
          idPsicologo: session.psicologo.id,
          idPaciente: session.paciente.id,
          estado: session.estado.nombreEstado,
          paciente:`${session.paciente.nombre} ${session.paciente.apellido}`
        }));
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error en fetch:', error.message || error));
  }, [userType]);

  //MODAL EVENTOOOOOOOOOO//
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    console.log("Evento seleccionado:", event);
  };
  const handleCloseModal = () => {
    setSelectedEvent(null);
  };
  const handleCancelEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    setIsCancelarModalOpen(false); // Cerrar modal después de cancelar
  };
//------------------------------------------

//MODAL REAGENDARRRRRRRRRRRRRRRRRRRRRR//
  const handleOpenReagendarModal = () => {
    setIsReagendarModalOpen(true);
  };
  const handleCloseReagendarModal = () => {
    setIsReagendarModalOpen(false);
  };
  const handleReagendar = (formData) => {
    const updatedEvent = {
      id: selectedEvent.id,
      start: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.startTime}`).toDate(),
      end: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.endTime}`).toDate(),
      title: `Cita con ${formData.idPaciente}`,
      reason: formData.reason,
      lugarSesion: formData.lugarSesion,
      idPsicologo: selectedEvent.idPsicologo,
      idPaciente: selectedEvent.idPaciente,
      estado: selectedEvent.estado
    };
  
    const updatedEvents = events.map(event => // Actualizar en events
      event.id === selectedEvent.id ? updatedEvent : event
    );

    setEvents(updatedEvents);
    setIsReagendarModalOpen(false); 
    handleCloseModal(); 
  };
  //---------------------------------------------------------


  //MODAL CANCELARRRRRRRRRRRRRRRRRRRRR//
  const handleOpenCancelarModal = () => {
    setIsCancelarModalOpen(true);
  };
  const handleCloseCancelarModal = () => {
    setIsCancelarModalOpen(false);
    handleCloseModal(); 
  };
  //-------------------------------------


  //MODAL AGENDARRRRRRRRRRRRRRR//
  const handleOpenAgendarModal = () => {
    setIsAgendarModalOpen(true);
  };
  const handleCloseAgendarModal = () => {
    setIsAgendarModalOpen(false);
  };
  const handleAgendar = (formData) => {
    const newEvent = {
      id: events.length + 1,
      start: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.startTime}`).toDate(),
      end: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.endTime}`).toDate(),
      title: `Cita con ${formData.student}`,
      reason: formData.reason
    };
    // Actualiza events con el nuevo
    setEvents([...events, newEvent]);
    setIsAgendarModalOpen(false);
    handleCloseModal();
  };
  //----------------------------------------

  const formats = {
    monthHeaderFormat: date => {
      const monthCapitalized = dayjs(date).format("MMMM").replace(/^\w/, c => c.toUpperCase());
      const year = dayjs(date).format("YYYY");
      return `${monthCapitalized} ${year}`;
    },
    dayHeaderFormat: date => {
      const dayCapitalized = dayjs(date).format("dddd").charAt(0).toUpperCase() + dayjs(date).format("dddd").slice(1);
      const dateFormatted = dayjs(date).format("DD/MM/YYYY");
      return `${dayCapitalized} ${dateFormatted}`;
    }
  };
  
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="mb-0">Calendario</p>
          <button type="button" className="btn btn-primary shadow" onClick={handleOpenAgendarModal}>
            <i className="bi bi-person-add"></i> Agendar sesión
          </button>
        </div>
        <div style={{ height: '63vh', width: '100%' }}>
          <Calendar
            localizer={localizer}
            events={events}
            views={["month", "day", "agenda"]}
            min={dayjs('2024-05-25T08:00:00').toDate()}
            max={dayjs('2024-05-25T19:00:00').toDate()}
            messages={{
              next: "Siguiente", previous: "Anterior", today: "Hoy", month: "Mes", day: "Día",
              date: "Fecha", time: "Hora", event: "Evento", noEventsInRange: "No tienes eventos programados aún."
            }}
            formats={formats}
            className="custom-calendar"
            onSelectEvent={handleSelectEvent}
          />
        </div>
        {selectedEvent && (
          <ModalEvento
            event={selectedEvent}
            onClose={handleCloseModal}
            onReagendar={handleOpenReagendarModal}
            onCancelarSesion={handleOpenCancelarModal}
          />
        )}
        {selectedEvent && isReagendarModalOpen && (
          <ReagendarModal
            event={selectedEvent}
            onClose={handleCloseReagendarModal}
            onSave={handleReagendar}
          />
        )}
        {selectedEvent && isCancelarModalOpen && (
          <ModalCancelar
            event={selectedEvent}
            onClose={handleCloseCancelarModal}
            onCancel={handleCancelEvent} 
          />
        )}
        {isAgendarModalOpen && (
          <ModalAgendar
            userType={userType} 
            onClose={handleCloseAgendarModal}
            onAgendar={handleAgendar}
          />
        )}
      </div>
    </div>
  );
};

export default Calendario;
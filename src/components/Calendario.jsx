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
          title: `Cita con ${session.paciente.nombre} ${session.paciente.apellido}`,
          reason: '',
          lugarSesion: session.lugarSesion,
          idPsicologo: session.psicologo.id,
          estado: session.estado.nombreEstado
        }));
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error en fetch:', error.message || error));
  }, [userType]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleOpenReagendarModal = (event) => {
    setSelectedEvent(event);
    setIsReagendarModalOpen(true);
  };

  const handleCloseReagendarModal = () => {
    setIsReagendarModalOpen(false);
  };

  const handleSaveReagendaredEvent = (updatedEvent) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
    setIsReagendarModalOpen(false);
    setSelectedEvent(null);
  };

  const handleOpenCancelarModal = () => {
    setIsCancelarModalOpen(true);
  };

  const handleCloseCancelarModal = () => {
    setIsCancelarModalOpen(false);
  };

  const handleCancelEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    setIsCancelarModalOpen(false); // Cerrar modal después de cancelar
  };
  
  const handleOpenAgendarModal = () => {
    setIsAgendarModalOpen(true);
  };

  const handleCloseAgendarModal = () => {
    setIsAgendarModalOpen(false);
  };

  // const handleAgendarSesion = () => {
  //   handleOpenAgendarModal();
  // };

  const handleAgendarSesion = (event) => {
    event.preventDefault();
  
    const nuevaSesion = {
      id: Math.random(), 
      nombre: event.target.student.value,
      fecha: event.target.date.value,
      hora: event.target.startTime.value,
      estado: 'Finalizado',
    };
  
    onAgendarSesion(nuevaSesion);
  };

  const handleAgendar = (formData) => {
    const newEvent = {
      id: events.length + 1,
      start: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.startTime}`).toDate(),
      end: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.endTime}`).toDate(),
      title: `Cita con ${formData.student}`,
      reason: formData.reason
    };
    // Actualiza events con el nuevo evento agregado
    setEvents([...events, newEvent]);
  
    setIsAgendarModalOpen(false); // Cierra modal después de agregar sesión
  };
  

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
          <button type="button" className="btn btn-primary shadow" onClick={handleAgendarSesion}>
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
            onSave={handleSaveReagendaredEvent}
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

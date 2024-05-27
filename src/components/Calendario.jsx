import React, { useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ModalEvento from './ModalEvento';
import ModalCancelar from './ModalCancelar';
import ModalAgendar from './ModalAgendar';
import ReagendarModal from './ReagendarModal';
import './../css/Calendario.css';
import './../css/Modal.css';

dayjs.locale('es');

const Calendario = () => {
  const localizer = dayjsLocalizer(dayjs);

  const initialEvents = [
    {
      id: 1,
      start: dayjs('2024-05-25T12:00:00').toDate(),
      end: dayjs('2024-05-25T13:00:00').toDate(),
      title: "Cita con Pepe",
      reason: ''
    },
    {
      id: 2,
      start: dayjs('2024-05-25T14:00:00').toDate(),
      end: dayjs('2024-05-25T15:00:00').toDate(),
      title: "Cita con Lola",
      reason: ''
    },
    {
      id: 3,
      start: dayjs('2024-05-25T15:00:00').toDate(),
      end: dayjs('2024-05-25T16:00:00').toDate(),
      title: "Cita con Lola",
      reason: ''
    }
  ];

  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isReagendarModalOpen, setIsReagendarModalOpen] = useState(false);
  const [isCancelarModalOpen, setIsCancelarModalOpen] = useState(false);
  const [isAgendarModalOpen, setIsAgendarModalOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleOpenReagendarModal = () => {
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

  const handleCancelEvent = (id, reason) => {
    setEvents(events.filter(event => event.id !== id));
    setIsCancelarModalOpen(false);
    setSelectedEvent(null);
    console.log(`Evento con ID ${id} cancelado por el siguiente motivo: ${reason}`);
  };

  const handleOpenAgendarModal = () => {
    setIsAgendarModalOpen(true);
  };

  const handleCloseAgendarModal = () => {
    setIsAgendarModalOpen(false);
  };

  const handleAgendarSesion = () => {
    handleOpenAgendarModal();
  };

  const handleAgendar = (formData) => {
    const newEvent = {
      id: events.length + 1,
      start: dayjs(`${formData.date}T${formData.startTime}`).toDate(),
      end: dayjs(`${formData.date}T${formData.endTime}`).toDate(),
      title: `Cita con ${formData.student}`,
      reason: formData.reason
    };
    setEvents([...events, newEvent]);
    setIsAgendarModalOpen(false);
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
            onClose={handleCloseAgendarModal}
            onAgendar={handleAgendar}
          />
        )}
      </div>
    </div>
  );
};

export default Calendario;

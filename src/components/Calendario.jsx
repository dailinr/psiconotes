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
  // Convertir userType a entero
  const userTypeInt = parseInt(userType, 10);

  const localizer = dayjsLocalizer(dayjs);

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalType, setModalType] = useState(null); 

  useEffect(() => {
    let endpoint = null;

    switch (userTypeInt) {
      case 1:
        endpoint = `http://localhost:8080/psicoNote/v1/sesion/obtenerPorPsicologo/${userTypeInt}`;
        break;
      case 3:
        endpoint = `http://localhost:8080/psicoNote/v1/sesion/obtenerPorPaciente/${userTypeInt}`;
        break;
      default:
        return;
    }

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const formattedEvents = data.map(session => ({
          id: session.id,
          start: dayjs(`${session.fecha}T${session.horaInicio}`).toDate(),
          end: dayjs(`${session.fecha}T${session.horaFinal}`).toDate(),
          title: `Cita con ${session.paciente.nombre}`,
          reason: '',
          lugarSesion: session.lugarSesion,
          idPsicologo: session.psicologo.id,
          idPaciente: session.paciente.id,
          estado: session.estado.nombreEstado,
          paciente: `${session.paciente.nombre} ${session.paciente.apellido}`
        }));

        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error en fetch:', error.message || error));
  }, [userTypeInt]); // Usar userTypeInt en lugar de userType

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalType('evento');
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setModalType(null);
  };

  const handleCancelEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    handleCloseModal();
  };

  const handleOpenModal = (modalType) => {
    setModalType(modalType);
  };

  const handleAgendar = (formData) => {
    const newEvent = {
      id: events.length + 1,
      start: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.startTime}`).toDate(),
      end: dayjs(`${formData.date.split('/').reverse().join('-')}T${formData.endTime}`).toDate(),
      title: `Cita con ${formData.student}`,
      reason: formData.reason
    };

    setEvents([...events, newEvent]);
    handleCloseModal();
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

    const updatedEvents = events.map(event =>
      event.id === selectedEvent.id ? updatedEvent : event
    );

    setEvents(updatedEvents);
    handleCloseModal();
  };

  const modalComponents = {
    evento: <ModalEvento event={selectedEvent} onClose={handleCloseModal} onReagendar={() => handleOpenModal('reagendar')} onCancelarSesion={() => handleOpenModal('cancelar')} />,
    reagendar: <ReagendarModal event={selectedEvent} onClose={handleCloseModal} onSave={handleReagendar} userType={userTypeInt}  />,
    cancelar: <ModalCancelar event={selectedEvent} onClose={handleCloseModal} onCancel={handleCancelEvent} userType={userTypeInt} />,
    agendar: <ModalAgendar userType={userTypeInt} onClose={handleCloseModal} onAgendar={handleAgendar} />
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
          {userTypeInt === 1 &&
            <button type="button" className="btn btn-primary shadow" onClick={() => handleOpenModal('agendar')}>
              <i className="bi bi-person-add"></i> Agendar sesión
            </button>
          }
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
        {modalType && modalComponents[modalType]}
      </div>
    </div>
  );
};

export default Calendario;

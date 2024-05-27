import React, { useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importar la localización de dayjs en español
import Modal from './ModalEvento';
import './../css/Calendario.css'

// Configurar dayjs para usar la localización en español
dayjs.locale('es');

export const Calendario = () => {
  const localizer = dayjsLocalizer(dayjs);

  const events = [/*Dinámicamente con la bd*/
    {
      id: 1,
      start: dayjs('2024-05-25T12:00:00').toDate(),
      end: dayjs('2024-05-25T13:00:00').toDate(),
      title: "Cita con Pepe"
    },
    {
      id: 2,
      start: dayjs('2024-05-25T14:00:00').toDate(),
      end: dayjs('2024-05-25T15:00:00').toDate(),
      title: "Cita con Lola"
    },
    {
      id: 3,
      start: dayjs('2024-05-25T15:00:00').toDate(),
      end: dayjs('2024-05-25T16:00:00').toDate(),
      title: "Cita con Lola"
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };
  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const formats = {
    monthHeaderFormat: date => {
      const monthCapitalized = dayjs(date).format("MMMM").replace(/^\w/, c => c.toUpperCase()); // Poner primera letra en mayúscula
      const year = dayjs(date).format("YYYY");

      return `${monthCapitalized} ${year}`;
    },
    dayHeaderFormat: date => {
      const dayCapitalized = dayjs(date).format("dddd").charAt(0).toUpperCase() + dayjs(date).format("dddd").slice(1); // Poner primera letra en mayúscula
      const dateFormatted = dayjs(date).format("DD/MM/YYYY"); // Formato de la fecha

      return `${dayCapitalized} ${dateFormatted}`;
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <p>Calendario</p>
        <div style={{ height: '63vh', width: '100%' }}>
          <Calendar
            localizer={localizer}
            events={events}
            views={["month", "day", "agenda"]}
            min={dayjs('2024-05-25T08:00:00').toDate()}
            max={dayjs('2024-05-25T19:00:00').toDate()}
            messages={{next: "Siguiente", previous: "Anterior", today: "Hoy", month: "Mes", day: "Día",
              date: "Fecha", time: "Hora", event: "Evento", noEventsInRange: "No tienes eventos programados aún."}}
            formats={formats}
            className="custom-calendar"
            onSelectEvent={handleSelectEvent}
          />
        </div>
        {selectedEvent && <Modal event={selectedEvent} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importar la localización de dayjs en español

// Configurar dayjs para usar la localización en español
dayjs.locale('es');

export const Calendario = () => {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs('2024-05-25T12:00:00').toDate(),
      end: dayjs('2024-05-25T13:00:00').toDate(),
      title: "Cita con Pepe"
    }
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div className="sesiones-cont">
          <p>Calendario</p>
        </div>
        <div style={{ height: '45vh', width: '100%' }}>
          <Calendar
            localizer={localizer}
            events={events}
            views={["month", "day", "agenda"]}
            min={dayjs('2024-05-25T08:00:00').toDate()}
            max={dayjs('2024-05-25T19:00:00').toDate()}
            messages={{ next: "Siguiente", previous: "Anterior", today: "Hoy", month: "Mes", day: "Día", date: "Fecha", time: "Hora", event: "Evento" }}
            formats={{
              dayHeaderFormat: date =>{
                return dayjs(date).format("dddd DD/MM/YYYY")
              }
            }}
            className="custom-calendar"/>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import "../css/notifications.css";
import dayjs from "dayjs";

const Notificaciones = ({ userType }) => {
  const [info, setInfo] = useState([]);
  const userTypeInt = parseInt(userType, 10);

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
      .then((response) => response.json())
      .then((data) => {
        let filteredSessions = [];

        if (userTypeInt === 3) {
          // Estudiante
          filteredSessions = data.filter((session) => {
            const sessionDate = dayjs(session.fecha, "DD/MM/YYYY");
            const currentDate = dayjs();
            return (
              (session.estado.nombreEstado === "reagendada" ||
                session.estado.nombreEstado === "cancelada") &&
              sessionDate.isAfter(currentDate)
            );
          });
        } else if (userTypeInt === 1) {
          // Psicólogo
          filteredSessions = data.filter((session) => {
            return (
              session.notificacion !== null &&
              session.estado.nombreEstado !== "reagendada" &&
              session.estado.nombreEstado !== "cancelada" &&
              session.estado.nombreEstado !== "realizada"
            );
          });
        }

        const formattedNotifications = filteredSessions.map((session) => ({
          id: session.id,
          estudiante: session.paciente.nombre,
          psicologo: session.psicologo.nombre,
          titulo: `Sesión ${session.estado.nombreEstado}`,
          motivo: session.notificacion,
          fecha: session.fecha,
          horaInicio: session.horaInicio,
          horaFinal: session.horaFinal,
          lugarSesion: session.lugarSesion,
        }));

        setInfo(formattedNotifications);
      })
      .catch((error) =>
        console.error("Error en fetch:", error.message || error)
      );
  }, [userTypeInt]);

  return (
    <section className="section-notification">
      <div className="navi">
        <h3 className="noti-title">Notificaciones</h3>
      </div>

      <div className="noti-content">
        {info.length === 0 ? (
          <p>No hay notificaciones.</p>
        ) : (
          info.map((notification) => (
            <div key={notification.id} className="noti noti-message noti-unread">
              <img
                src="../public/icon_student.png"
                alt="user avatar"
                className="avatar"
              />
              <div className="noti-text">
                <p>
                  {notification.psicologo}{" El estado es: "}
                  {notification.titulo}
                </p>
                <p className="noti-message-message">{notification.motivo}</p>
                <p>{`Fecha: ${notification.fecha} Hora: ${notification.horaInicio} - ${notification.horaFinal}`}</p>
                <p>{`Lugar: ${notification.lugarSesion}`}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Notificaciones;

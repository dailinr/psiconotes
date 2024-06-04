import React, { useState } from "react";
import "../css/notifications.css";

function Notificaciones() {
  const [info, setInfo] = useState([
    {
      id: "1",
      estudiante: "Valentina",
      psicologo: "Milicen",
      titulo: "Sesión cancelada",
      motivo: "Si me muevo me cago, lorem ipsum traquen truqui pum pum",
      unread: true
    }
  ]);

  const markAsRead = () => {
    const updatedInfo = info.map((notification) => ({
      ...notification,
      unread: false
    }));
    setInfo(updatedInfo);
  };

  const countNoti = info.filter(notification => notification.unread).length;

  return (
    <section className="section-notification">
      <div className="navi">
        <h3 className="noti-title">
          Notifications <span className="noti-count">{countNoti}</span>
        </h3>
        <a className="noti-markasread" onClick={markAsRead}>Mark all as read</a>
      </div>

      <div className="noti-content">
        {info.map((notification) => (
          <div key={notification.id} className={`noti noti-message ${notification.unread ? 'noti-unread' : ''}`}>
            <img
              src="../public/icon_student.png"
              alt="mark webber image"
              className="avatar"
            />
            <div className="noti-text">
              <p>
                <span className="link">{notification.psicologo}</span> canceló la sesión
                <span className={`red-dot ${notification.unread ? 'dot1' : ''}`}></span>
              </p>
              <p className="noti-message-message">{notification.motivo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Notificaciones;

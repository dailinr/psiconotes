import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/filSesion.css';

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // El `Toast` se ocultará después de 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [onClose]);

  return (
    <div className="toast-container">
      <div className="toast show align-items-center text-white toast-custom border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
}

export default Toast;

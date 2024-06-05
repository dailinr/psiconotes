import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';
import { ModalInforme } from './Modales/ModalInforme';
import { Link } from 'react-router-dom';


export const FilaSesion = ({ id, nombre, fecha, hora, estado }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePlusIconClick = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='fil-sesion mb-3'>
      <div className='row-sesion shadow'>
        <div className='d-flex'>
          <div className='info ps-5'>
            <p>{id}</p>
          </div>
        </div>

        <div className='d-flex'>
          <img src="../public/icon_student.png" alt="perfil estudiante" />
          &nbsp;
          <div className='info'>
            <span>{nombre}</span>
            <br />
            <StudentDetails />
          </div>
        </div>

        <div className='d-flex'>
          <div className='info'>
            Fecha
            <br />
            <span>{fecha}</span>
          </div>
        </div>

        <div className='d-flex'>
          <div className='info'>
            Hora
            <br />
            <span>{hora}</span>
          </div>
        </div>

        <div className='d-flex'>
          <div className='info'>
            Estado
            <br />
            <span className='state-inf'>{estado}</span>
          </div>
        </div>

        <div className='d-flex' >
                
                <div className='info'>
                    Informe
                    <br />
                    <span >
                        <i className="bi bi-plus-circle-fill" onClick={handlePlusIconClick} />
                        {showModal && (
                            <ModalInforme onClose={handleCloseModal} />
                        )}

                        &nbsp; &nbsp; 
                        <Link to={`/mostrar-informe/${id}`}>
                            <i className="bi bi-eye-fill" />
                        </Link>
                        
                        &nbsp; &nbsp; 
                        <i class="bi bi-file-earmark-arrow-down"></i>
                    </span>
                </div>
            </div>  

      </div>
    </div>
  );
};
import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';
import { MostrarInforme } from './MostrarInforme.jsx';
import {DescargarInforme } from './DescargarInforme.jsx';
import { ModalInforme } from './Modales/ModalInforme';

export const FilaSesion = () => {
  const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
      setShowModal(false);
    };
    
    const handleOpenModal = () => {
        setShowModal(true);
    };

// -----------------------------
    const [showModalInf, setShowModalInf] = useState(false);

    const handlePlusIconClick = (event) => {
    event.stopPropagation();
        setShowModalInf(true);
    };

    const handleCloseModalInf = () => {
        setShowModalInf(false);
    };


    // // const pageStyle = showDetails ? 'pageWithDetails' : 'pageWithoutDetails';
  return (
    <div className='fil-sesion mb-3 '>
        
        <div className='row-sesion shadow'>

            <div className='d-flex' >
                <img src="../public/icon_student.png" alt="perfil estudiante" />
                &nbsp;
                <div className='info' >
                    <span>Paciente</span>
                    <br />
                    <StudentDetails />
                </div>
            </div>
            <div className='d-flex' >
                
                <div className='info'>
                    Fecha
                    <br />
                    <span>24-05-2024</span>
                </div>
            </div>

            <div className='d-flex' >
                
                <div className='info'>
                    Hora
                    <br />
                    <span>03:11:07</span>
                </div>
            </div>

            <div className='d-flex' >
                
                <div className='info'>
                    Estado
                    <br />
                    <span className='state-inf'>Finalizado</span>
                </div>
            </div>

            <div className='d-flex' >
                
                <div className='info'>
                    Informe
                    <br />
                    <span >
                        <i className="bi bi-plus-circle-fill" onClick={handlePlusIconClick} />
                        {showModalInf && (
                            <ModalInforme onClose={handleCloseModalInf} />
                        )}
                        
                        &nbsp; &nbsp; 
                        <i className="bi bi-eye-fill" onClick={handleOpenModal}></i>                        
                        <MostrarInforme show={showModal} handleClose={handleCloseModal} />

                        &nbsp; &nbsp; 
                        <DescargarInforme className="inline-component"/>  
                    </span>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
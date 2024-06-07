import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';
import { MostrarInforme } from './MostrarInforme.jsx';
import {DescargarInforme } from './DescargarInforme.jsx';


export const FilaSesion = () => {
    
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
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
                        <i class="bi bi-plus-circle-fill"></i>
                        
                        &nbsp; &nbsp; 
                        <i className="bi bi-eye-fill" onClick={handleOpenModal}></i>                        
                        
                        <MostrarInforme show={showModal} handleClose={handleCloseModal}>
                            Contenido del Modal
                        </MostrarInforme>

                        &nbsp; &nbsp; 
                        <DescargarInforme className="inline-component"/>  
                    </span>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
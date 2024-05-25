import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';

export const FilaSesion = () => {
    // // const pageStyle = showDetails ? 'pageWithDetails' : 'pageWithoutDetails';

  return (
    <div className='fil-sesion mb-3 '>
        
        <div className='row-sesion shadow'>

            <div className='d-flex' >
                <img src="../public/icon_student.png" alt="perfil estudiante" />
                &nbsp;
                <div className='info' >
                    <StudentDetails />
                    <br />
                    <span>- - -</span>
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
                        <i class="bi bi-eye-fill"></i>
                        &nbsp; &nbsp; 
                        <i class="bi bi-file-earmark-arrow-down"></i>
                    </span>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

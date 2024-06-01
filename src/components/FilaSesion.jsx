import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';

export const FilaSesion = ({ paciente }) => {
    return (
      <div className='fil-sesion mb-3 '>
        <div className='row-sesion shadow'>
          <div className='d-flex' >
            <img src="../public/icon_student.png" alt="perfil estudiante" />
            &nbsp;
            <div className='info' >
              <span>{paciente.student}</span>
              <br />
              <StudentDetails paciente={paciente} />
            </div>
          </div>
          {/* <div className='d-flex' >
            <div className='info'>
              {paciente.date}
              <br />
              {/* Resto del código 
            </div>
          </div> */}
        </div>
      </div>
    );
  };
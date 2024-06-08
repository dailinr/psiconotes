import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';
import { MostrarInforme } from './MostrarInforme.jsx';
import { DescargarInforme } from './DescargarInforme.jsx';
import { ModalInforme } from './Modales/ModalInforme';
// import { Link } from 'react-router-dom';

export const FilaSesion = ({ id, nombre, fecha, hora, estado }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalInf, setShowModalInf] = useState(false);
  const [observacion, setObservacion] = useState('');


    const handleCloseModal = () => {
      setShowModal(false);
    };
    
    const handleOpenModal = () => {
        setShowModal(true);
    };

// -----------------------------

    const handlePlusIconClick = (event) => {
    event.stopPropagation();
        setShowModalInf(true);
    };

    const handleCloseModalInf = () => {
        setShowModalInf(false);
    };

    const handleSaveObservacion = (obs) => {
        setObservacion(obs); 
    };

  return (
    <div className='fil-sesion mb-3 '>
        
        <div className='row-sesion shadow'>

            <div className='d-flex'>
                <div className='info ps-5'>
                    <p>{id}</p>
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
                        <i className="bi bi-plus-circle-fill"  onClick={handlePlusIconClick} />
                        {showModalInf && (
                            <ModalInforme onClose={handleCloseModalInf}  onSave={handleSaveObservacion}  />
                        )}

                        &nbsp; &nbsp; 
                        <i className="bi bi-eye-fill" onClick={handleOpenModal} ></i>                        
                        <MostrarInforme show={showModal} handleClose={handleCloseModal} 
                        nombre={nombre} fecha={fecha} hora={hora} observacion={observacion}/>

                        &nbsp; &nbsp; 
                        <DescargarInforme className="inline-component" 
                        nombre={nombre} fecha={fecha} hora={hora} observacion={observacion}/>  
                    </span>
                </div>
            </div>
            
        </div>
        
    </div>
  );
};
import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';
import { MostrarInforme } from './MostrarInforme.jsx';
import { DescargarInforme } from './DescargarInforme.jsx';
import { ModalInforme } from './Modales/ModalInforme';

export const FilaSesion = ({ session }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalInf, setShowModalInf] = useState(false);
  const [informe, setInforme] = useState('');

    const handleCloseModal = () => {
      setShowModal(false);
    };
    
    const handleOpenModal = () => {
        setShowModal(true);
    };
// -----------------------------

    const handlePlusIconClick = (event) => {
        if(informe !== ''){
            return ;
        }
        else{
            event.stopPropagation();
            setShowModalInf(true);
        }
        
    };

    const handleCloseModalInf = () => {
        setShowModalInf(false);
    };

    const handleSaveInforme = (inf) => {
        setInforme(inf); 
    };

  return (
    <div className='fil-sesion mb-3 '>
        
        <div className='row-sesion shadow'>
            <img src="../public/icon_student.png" alt="perfil estudiante" />
            
            <div  className='d-flex'>    
                <div className='info' >
                    <span>{session.name}</span>
                    <br />
                    <span>Sesion&nbsp;{session.id}</span>
                </div>
            </div>
            <div className='d-flex' >
                
                <div className='info'>
                    Fecha
                    <br />
                    <span>{session.fecha}</span>
                </div>
            </div>

            <div className='d-flex' >
                
                <div className='info'>
                    Hora
                    <br />
                    <span>{session.hora}</span>
                </div>
            </div>

            <div className='d-flex' >
                
                <div className='info'>
                    Estado
                    <br />
                    <span className='state-inf'>{session.estado}</span>
                </div>
            </div>

            <div className='d-flex' >
                
                <div className='info'>
                    Informe
                    <br />
                    <span >
                        <i className="bi bi-plus-circle-fill"  
                            onClick={informe !== '' ? null : handlePlusIconClick} 
                            style={{ 
                                color: informe !== '' ? 'gray' : 'yourActiveColor',
                                cursor: informe !== '' ? 'default' : 'pointer'
                            }} 
                        />
                        {showModalInf && (
                            <ModalInforme onClose={handleCloseModalInf}  onSave={handleSaveInforme}  />
                        )}

                        &nbsp; &nbsp; 
                        <i className="bi bi-eye-fill" 
                            onClick={informe === ''? null : handleOpenModal} 
                            style={{ 
                                color: informe === '' ? 'gray' : 'black',
                                cursor: informe === '' ? 'default' : 'pointer'
                            }} 
                        />
                        <MostrarInforme show={showModal} handleClose={handleCloseModal} 
                        session={session} informe={informe}/>

                        &nbsp; &nbsp; 
                        {informe === '' ? (
                            <i className=" bi bi-file-earmark-arrow-down"
                                style={{ color: 'gray', cursor: 'default' }} 
                            />
                        ) :
                         (informe !== '' && (
                            <DescargarInforme 
                                className="inline-component" 
                                session={session} 
                                informe={informe} 
                            />
                         ))
                        }
                    </span>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
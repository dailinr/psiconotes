import '../css/filSesion.css';
import React, { useEffect, useState } from 'react'
import StudentDetails from './StudentDetails';
import { ModalInforme } from './Modales/ModalInforme';


export const FilaSesion = () => {

    const [showModal, setShowModal] = useState(false);

    const handlePlusIconClick = (event) => {
        event.stopPropagation();
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

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
                        {showModal && (
                            <ModalInforme onClose={handleCloseModal} />
                        )}

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

//     return (
//       <div className='fil-sesion mb-3 '>
//         <div className='row-sesion shadow'>
//           <div className='d-flex' >
//             <img src="../public/icon_student.png" alt="perfil estudiante" />
//             &nbsp;
//             <div className='info' >
//               <span>{sesion.title}</span>
//               <br />
//               <StudentDetails />
//             </div>
//           </div>
//           <div className='d-flex' >
//             <div className='info'>
//               Fecha <br />
//               <span> -- </span>
//             </div>
//           </div>

//           <div className='d-flex' >
                
//                 <div className='info'>
//                     Hora
//                     <br />
//                     <span> -- </span>
//                 </div>
//             </div>

//             <div className='d-flex' >
                
//                 <div className='info'>
//                     Estado
//                     <br />
//                     <span className='state-inf'>Finalizado</span>
//                 </div>
//             </div>

//             <div className='d-flex' >
                
//                 <div className='info'>
//                     Informe
//                     <br />
//                     <span >
//                         <i class="bi bi-plus-circle-fill"></i>
//                         &nbsp; &nbsp; 
//                         <i class="bi bi-eye-fill"></i>
//                         &nbsp; &nbsp; 
//                         <i class="bi bi-file-earmark-arrow-down"></i>
//                     </span>
//                 </div>
//             </div>

//         </div>
//       </div>
//     );
//   };
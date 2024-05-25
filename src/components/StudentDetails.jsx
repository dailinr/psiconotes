import React, { useState, useEffect } from 'react';
import '../mostrarEstudiante.css'

const StudentDetails = () => {
    // EVENTO PARA MOSTRAR LOS DETALLES DEL ESTUDIANTE
    const [showDetails, setShowDetails] = useState(false);

    const showStudent = () => {
        setShowDetails(!showDetails);
    }

    useEffect(() => {
        if (showDetails) {
            document.body.classList.add('pageWithDetails');
            document.body.classList.remove('pageWithoutDetails');
            
        } else {
            document.body.classList.add('pageWithoutDetails');
            document.body.classList.remove('pageWithDetails');
            
        }
    }, [showDetails]);

    // EVENTO PARA MOSTRAR EL ESTADO DEL ESTUDIANTE
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleSwitchChange = (event) => {
        setIsSwitchOn(event.target.checked);
        console.log("Activado");
    }

    return (
        <>
            <span className='name-stud' onClick={showStudent}>Juanito Alimaña </span>
            {showDetails && 
                <div className="container-details">
                    <div className="mas-info">
                        MAS INFORMACION 
                        <span className='cerrar'> 
                            <button onClick={showStudent} type="button" class="btn-close" aria-label="Close"></button>
                        </span>
                    </div>
                    <div className="content-det border-top border-3">

                        <div className="colu-1">
                            <img src="../public/mas_info_estud.png" alt="foto_estudiante" className="pfp_stud"/>

                            <div className="custom-control custom-switch ">
                                <input onChange={handleSwitchChange} type="checkbox" className=" custom-control-input" id="customSwitch1"/>
                                <label className="custom-control-label" for="customSwitch1"></label>
                            </div>
                            <p>{isSwitchOn ? 'Activo' : 'Inactivo'}</p>
                            

                            <div className="editar">
                                <div className="cont-pencil mb-1 ">
                                    <i class="bi bi-pencil"></i>
                                </div>
                                Editar
                            </div>
                        </div>

                        <div className="colu-2">
                            <p>Pablo Felipe Piccaso Gonzalez</p>
                            <p>15 años</p>
                            <p>Liceo del norte</p>
                            <p>soytubebe@gmail.com</p>
                            <p>3006482013</p>
                            <p>Petrona Martinez (Acuente)</p>
                            <p>3006482013 </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default StudentDetails;
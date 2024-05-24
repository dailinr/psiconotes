import React, { useState, useEffect } from 'react';
import '../mostrarEstudiante.css'

const StudentDetails = () => {
    const [showDetails, setShowDetails] = useState(false);

    const watchStudent = () => {
        setShowDetails(!showDetails);
    }

    useEffect(() => {
        if (showDetails) {
            document.body.classList.add('pageWithDetails');
            document.body.classList.remove('pageWithoutDetails');
            console.log("mostrar modal");
        } else {
            document.body.classList.add('pageWithoutDetails');
            document.body.classList.remove('pageWithDetails');
            console.log("NO mostrar modal")
        }
    }, [showDetails]);

    return (
        <>
            <span className='name-stud' onClick={watchStudent}>Juanito Alimaña </span>
            {showDetails && 
                <div className="container-details">
                    <div className="content-det">
                        Detalles del estudiante
                    </div>
                </div>
            }
        </>
    )
}

export default StudentDetails;
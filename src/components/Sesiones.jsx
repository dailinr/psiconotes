import { FilaSesion } from './FilaSesion.jsx'
import React, { useEffect, useState } from 'react'

import dayjs from 'dayjs';
import 'dayjs/locale/es';

export const Sesiones = ({ userType }) => {
  const [sessions, setSessions] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  {/* Prueba conexion API
  useEffect(() => {
    fetch('http://localhost:8080/psicoNote/v1/sesion')
      .then(response => response.json())
      .then(data => {
        const filteredSessions = data.filter(session => {
          return session.psicologo && session.psicologo.id.toString() === userType.toString();
        });

        const formattedSessions = filteredSessions.map(session => ({
          id: session.id,
          name: session.paciente.nombre + ' ' + session.paciente.apellido,
          fecha: session.fecha,
          hora: dayjs(`${session.fecha}T${session.horaInicio}`).toDate(),
          horaFinal: dayjs(`${session.fecha}T${session.horaFinal}`).toDate(),
          lugar: session.lugarSesion,
          idPsicologo: session.psicologo.id,
          idPaciente: session.paciente.id,
          estado: session.estado.nombreEstado,

        }));
        setSessions(formattedSessions);
        
      })
      .catch(error => console.error('Error en fetch:', error.message || error));
  }, [userType]); 

  const guardarSesion = (nuevaSesion) => {
    fetch('http://localhost:8080/psicoNote/v1/sesion/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaSesion)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Sesion guardada:', data);
      // Actualiza la lista de sesiones después de guardar una nueva sesión
      setSessions(prevSessions => [...prevSessions, {
        id: data.id,
        name: data.paciente.nombre + ' ' + data.paciente.apellido,
        fecha: data.fecha,
        hora: dayjs(`${data.fecha}T${data.horaInicio}`).toDate(),
        horaFinal: dayjs(`${data.fecha}T${data.horaFinal}`).toDate(),
        lugar: data.lugarSesion,
        idPsicologo: data.psicologo.id,
        idPaciente: data.paciente.id,
        estado: data.estado.nombreEstado,
      }]);
    })
    .catch(error => console.error('Error en fetch:', error.message || error));
  }; */}
  

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOption(option);
    // filtrar(option);
  };

  // Funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
    // filtrar(selectedOption);
  }
  
  let resultado = []
  
  if(!search){
    resultado = sessions
  }
  else{
    resultado = sessions.filter( (dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      dato.fecha.toLowerCase().includes(search.toLocaleLowerCase()) ||
      dato.hora.toLowerCase().includes(search.toLocaleLowerCase()) ||
      dato.estado.toLowerCase().includes(search.toLocaleLowerCase()) 
    );
  } 

  // Datos de prueba que se eliminaran despues 
  useEffect(() => {
    
    const fakeData = [
      { id: 1, name: "Luis Hernandez", fecha: "2024-06-08", hora: "10:00", estado: "Activa" },
      { id: 2, name: "Jose Muñoz", fecha: "2024-06-09", hora: "11:00", estado: "Realizada" },
      { id: 3, name: "Sara Cordoba", fecha: "2024-06-10", hora: "12:30", estado: "Agendada" },
      { id: 4, name: "Firulais", fecha: "2024-06-17", hora: "14:00", estado: "Inclumplida" },
      { id: 5, name: "Natalia Perez", fecha: "2024-06-19", hora: "08:00", estado: "Cancelada" }
    ];
    setSessions(fakeData);
    setFilteredResults(fakeData);
  }, []); 
 

  return (
    <div>
      <div className="search-and-button-container">
        <form className="d-flex search-container">
            <input value={search} onChange={searcher} className="form-control search me-2 shadow-sm"
             type="text" placeholder="Search for something" />
        </form>
      </div>
      
      <div className="sesiones-cont">
        <div>
          <p>
            Sesiones 
            <span style={{border: 'none'}} >
              <select className='filter' value={selectedOption} onChange={handleChange}>
                <option value="" disabled hidden>Filtrar</option>
                <option value="name" >Nombre</option> 
                <option value="fecha" >Fecha</option>
                <option value="hora" >Hora</option>
                <option value="estado" >Estado</option> 
                {/* <hr className="it-divider" /> */}
                <option value="ninguno">Ninguno</option>
              </select>
            </span> 
          </p> 

        </div>

      </div>

      <ul>
      {resultado.map((resultado) => (
        <FilaSesion
          key={resultado.id}
          session={resultado}
        />
      ))}
    </ul>

    </div>
  )
}

export default Sesiones;
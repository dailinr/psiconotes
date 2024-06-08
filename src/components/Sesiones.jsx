import { FilaSesion } from './FilaSesion.jsx'
import React, { useEffect, useState } from 'react'

export const Sesiones = () => {
  const [sessions, setSessions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch("http://localhost:8080/psicoNote/v1/sesion");
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchSessions();
    fetchUsers();
  }, []);


  return (
    <div>
    <div className="search-and-button-container">
      <form className="d-flex search-container">
          <input className="form-control search me-2 shadow-sm" type="text" placeholder="Search for something" />
      </form>
    </div>
      
      <div className="sesiones-cont">
        <div>
          <p >Sesiones 
            <span className="filter">
              Filtrar <i class="bi bi-caret-down-fill"></i>
            </span>
          </p> 
        </div>

        <ul>
          {users.map((user) => (
            <FilaSesion
              key={user.id}
              id={user.id}
              nombre={user.name}
              fecha={"2022-01-01"} 
              hora={"10:00"} 
              estado={"Finalizado"} 
            />
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Sesiones;
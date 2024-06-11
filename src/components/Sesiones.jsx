import { FilaSesion } from './FilaSesion.jsx';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

export const Sesiones = ({ userType }) => {
  const [sessions, setSessions] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/psicoNote/v1/sesion'); 
        if (!response.ok) {
          throw new Error('Error al cargar sesiones');
        }
        const data = await response.json();
        setSessions(data);
        setFilteredResults(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error al cargar sesiones:', error);
        setError('Hubo un problema al cargar las sesiones. Por favor, intenta nuevamente más tarde.');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const filterResults = () => {
    if (!search) {
      return sessions;
    } else {
      return sessions.filter((dato) =>
        (dato.paciente.nombre && dato.paciente.nombre.toLowerCase().includes(search.toLowerCase())) ||
        (dato.fecha && dato.fecha.toLowerCase().includes(search.toLowerCase())) ||
        (dato.horaInicio && dato.horaInicio.toLowerCase().includes(search.toLowerCase())) ||
        (dato.estado.nombreEstado && dato.estado.nombreEstado.toLowerCase().includes(search.toLowerCase()))
      );
    }
  };
  

  const resultado = filterResults();

  if (loading) {
    return <div>Cargando sesiones...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="search-and-button-container">
        <form className="d-flex search-container">
          <input
            value={search}
            onChange={searcher}
            className="form-control search me-2 shadow-sm"
            type="text"
            placeholder="Buscar algo"
          />
        </form>
      </div>

      <div className="sesiones-cont">
        <div>
          <p>
            Sesiones{' '}
            <span style={{ border: 'none' }}>
              <select className="filter" value={selectedOption} onChange={handleChange}>
                <option value="" disabled hidden>
                  Filtrar
                </option>
                <option value="paciente">Paciente</option>
                <option value="fecha">Fecha</option>
                <option value="horaInicio">Hora</option>
                <option value="estado">Estado</option>
                <option value="ninguno">Ninguno</option>
              </select>
            </span>
          </p>
        </div>
      </div>

      <ul>
        {resultado.map((sesion) => (
          <FilaSesion key={sesion.id} session={sesion} />
        ))}
      </ul>
    </div>
  );
};

export default Sesiones;

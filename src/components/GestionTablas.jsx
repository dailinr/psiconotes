import React, { useState } from 'react';
import TablaMisPacientes from './TablaMisPacientes';
import TablaMisPsicologos from './TablaMisPsicologos';

const GestionTablas = ({ userType, setActiveSection }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searcher = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="search-and-button-container">
          <form className="d-flex search-container">
            <input
              value={searchTerm}
              onChange={searcher}
              className="form-control search me-2 shadow-sm"
              type="text"
              placeholder="Search for something"
            />
          </form>
        </div>
        {userType === '2' ? (
          <TablaMisPsicologos searchTerm={searchTerm}
          setActiveSection={setActiveSection}  />
        ) : (
          <TablaMisPacientes searchTerm={searchTerm} 
          setActiveSection={setActiveSection} />
        )}
      </div>
    </div>
  );
};

export default GestionTablas;

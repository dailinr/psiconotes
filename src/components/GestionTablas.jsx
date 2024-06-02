import React from 'react';
import TablaMisPacientes from './TablaMisPacientes';
import TablaMisPsicologos from './TablaMisPsicologos';

const GestionTablas = ({ userType }) => {
  return (
    <div class="card">
      <div class="card-body">
        <div className="search-and-button-container">
          <form className="d-flex search-container">
              <input className="form-control search me-2 shadow-sm" type="text" placeholder="Search for something" />
          </form>
        </div>
            {userType === 'admin' ? (
                <TablaMisPsicologos />
            ) : (
                <TablaMisPacientes />
            )}
      </div>
    </div>
  );
};

export default GestionTablas;

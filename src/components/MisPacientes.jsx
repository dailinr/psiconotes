import React from 'react';
import TablaMisPacientes from './TablaMisPacientes';

export const MisPacientes = () => {
  return (
    <div class="card">
      
      <div class="card-body">
        <div className="search-and-button-container">
          <form className="d-flex search-container">
              <input className="form-control search me-2 shadow-sm" type="text" placeholder="Search for something" />
          </form>
        </div>
        <TablaMisPacientes />
      </div>
    </div>
  );
};

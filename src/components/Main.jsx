import React from 'react';
import '../css/main.css';

export const Main = ({ children }) => {
  return (
    <div className="main">
      <div className="sesiones-cont">
        {children}
      </div>
    </div>
  );
};

export default Main;

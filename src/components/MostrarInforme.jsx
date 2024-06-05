import React from 'react';

export const MostrarInforme = ({ informeUrl }) => {
  return (
    <div>
      <h1>Informe</h1>
      <embed src={informeUrl} width="800px" height="600px" />
    </div>
  );
};

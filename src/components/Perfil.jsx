import React, { useEffect, useState } from 'react';
import './../css/Perfil.css';

const PerfilPsicologo = ({ psicologo }) => {
  return (
    <div className="perfil-psicologo">
      <div className="perfil-header">
        <img src="../public/icon_student.png" alt="avatar" className="avatar" />
        <h2>{psicologo.nombre} {psicologo.apellido}</h2>
      </div>
      <div className="perfil-body">
        <p><strong>Estado:</strong> {psicologo.estado}</p>
        <p><strong>Edad:</strong> {psicologo.edad}</p>
        <p><strong>Teléfono:</strong> {psicologo.telefono}</p>
        <h3>Usuario</h3>
        <p><strong>Username:</strong> {psicologo.usuarioDto.username}</p>
        <p><strong>Email:</strong> {psicologo.usuarioDto.email}</p>
      </div>
    </div>
  );
};

const Perfil = () => {
  const [psicologo, setPsicologo] = useState(null);
  const psicologoId = 1; // Puedes obtener este ID dinámicamente según sea necesario

  useEffect(() => {
    // Aquí llamamos a la API para obtener los datos del psicólogo
    fetch(`/api/psicologos/${psicologoId}`)
      .then(response => response.json())
      .then(data => setPsicologo(data))
      .catch(error => console.error('Error al obtener los datos del psicólogo:', error));
  }, [psicologoId]);

  if (!psicologo) {
    return <div>Cargando...</div>;
  }

  return <PerfilPsicologo psicologo={psicologo} />;
};

export default Perfil;

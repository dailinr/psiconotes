import React, { useState } from 'react';
import './../css/NuevoPaciente.css';

const NuevosPacientes= () => {
  const [form, setForm] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    email: '',
    genero: 'Fluido',
    grado: '5',
    contacto: '',
    nombreAcudiente: '',
    contactoEmergencia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo paciente:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="left-column">
        <div>
          <img src="avatar_placeholder.png" alt="avatar" className="avatar" />
        </div>
      </div>
      <div className="new-patient">
        <div className="input-group">
          <label>Primer Nombre *</label>
          <input type="text" name="primerNombre" value={form.primerNombre} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Segundo Nombre</label>
          <input type="text" name="segundoNombre" value={form.segundoNombre} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Primer Apellido *</label>
          <input type="text" name="primerApellido" value={form.primerApellido} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Segundo Apellido *</label>
          <input type="text" name="segundoApellido" value={form.segundoApellido} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Género *</label>
          <select name="genero" value={form.genero} onChange={handleChange} required>
            <option value="Fluido">Fluido</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="input-group">
          <label>Grado *</label>
          <select name="grado" value={form.grado} onChange={handleChange} required>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className="input-group">
          <label>Contacto *</label>
          <input type="text" name="contacto" value={form.contacto} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Nombre del acudiente</label>
          <input type="text" name="nombreAcudiente" value={form.nombreAcudiente} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Contacto de emergencia *</label>
          <input type="text" name="contactoEmergencia" value={form.contactoEmergencia} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Añadir paciente</button>
      </div>
    </form>
  );
};

export default NuevosPacientes;

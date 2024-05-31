import React, { useState } from 'react';
import './../css/NuevoPaciente.css';

const NuevosPacientes = () => {
  const [form, setForm] = useState({
    primerNombre: '', segundoNombre: '', primerApellido: '', segundoApellido: '', email: '', genero: '', grado: '', contacto: '',
    nombreAcudiente: '', contactoEmergencia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar que los inputs de contacto solo acepten números, no espacios y máximo 10 caracteres
    if ((name === 'contacto' || name === 'contactoEmergencia')) {
      const filteredValue = value.replace(/\D/g, ''); // Eliminar todo lo que no sea dígito
      if (filteredValue.length <= 10) {
        setForm({
          ...form,
          [name]: filteredValue,
        });
      }
      return;
    }

    // Validar que los inputs de texto no acepten números ni espacios
    if (['primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido', 'nombreAcudiente'].includes(name)) {
      const filteredValue = value.replace(/[0-9\s]/g, ''); // Eliminar números y espacios
      setForm({
        ...form,
        [name]: filteredValue,
      });
      return;
    }

    // Permitir solo números y limitar a 2 caracteres para la edad
    if (name === 'edad') { 
      const filteredValue = value.replace(/\D/g, '').slice(0, 2); 
      setForm({
        ...form,
        [name]: filteredValue,
      });
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo paciente:', form);
  };

  // Generar opciones de grado
  const gradoOptions = [];
  for (let i = 1; i <= 11; i++) {
    gradoOptions.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className='text-new-patient'>
          <p>Nuevo Paciente</p>
        </div>
        <form onSubmit={handleSubmit} className="form-new-patient">
          <div className="left-column">
            <div>
              <img src="../public/icon_student.png" alt="avatar" className='avatar' />
            </div>
          </div>
          <div className="new-patient">
            <div className="input-row">
              <div className="input-item">
                <label className="required-label">Primer Nombre <span>*</span></label>
                <input type="text" name="primerNombre" value={form.primerNombre} onChange={handleChange} required />
              </div>
              <div className="input-item">
                <label>Segundo Nombre</label>
                <input type="text" name="segundoNombre" value={form.segundoNombre} onChange={handleChange} />
              </div>
            </div>
            <div className="input-row">
              <div className="input-item">
                <label className="required-label">Primer Apellido <span>*</span></label>
                <input type="text" name="primerApellido" value={form.primerApellido} onChange={handleChange} required />
              </div>
              <div className="input-item">
                <label className="required-label">Segundo Apellido <span>*</span></label>
                <input type="text" name="segundoApellido" value={form.segundoApellido} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-row">
              <div className="input-item">
                <label className="required-label">Email <span>*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="input-item">
                <label className="required-label">Género <span>*</span></label>
                <select name="genero" value={form.genero} onChange={handleChange} required>
                  <option value="" disabled>Seleccione una opción</option>
                  <option value="Fluido">Fluido</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
            </div>
            <div className="input-row">
              <div className="input-item">
                <label className="required-label">Grado <span>*</span></label>
                <select name="grado" value={form.grado} onChange={handleChange} required>
                  <option value="" disabled>Seleccione una opción</option>
                  {gradoOptions}
                </select>
              </div>
              <div className="input-item">
                <label className="required-label">Edad <span>*</span></label>
                <input type="text" name="edad" value={form.edad} onChange={handleChange} />
              </div>
              <div className="input-item">
                <label className="required-label">Contacto <span>*</span></label>
                <input type="text" name="contacto" value={form.contacto} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-row">
              <div className="input-item">
                <label>Nombre del acudiente</label>
                <input type="text" name="nombreAcudiente" value={form.nombreAcudiente} onChange={handleChange} />
              </div>
              <div className="input-item">
                <label className="required-label">Contacto de emergencia <span>*</span></label>
                <input type="text" name="contactoEmergencia" value={form.contactoEmergencia} onChange={handleChange} required />
              </div>
            </div>
            <button type="submit" className="submit-button">Añadir paciente</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevosPacientes;

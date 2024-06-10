import React from 'react';
import './../css/NuevoPaciente.css';
const NuevoUsuario = ({ userType, handleSubmit, handleChange, form }) => {
  // Generar opciones de grado (solo para pacientes)
  const gradoOptions = [];
  if (userType === '1') {
    for (let i = 1; i <= 11; i++) {
      gradoOptions.push(<option key={i} value={i}>{i}</option>);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className='text-new-patient'>
          <p>Nuevo {userType === '2' ? 'Psicólogo' : 'Paciente'}</p>
        </div>
        <form onSubmit={handleSubmit} className="form-new-patient">
          <div className={`left-column ${userType === '1' ? 'show-avatar' : ''}`}>
            {userType === '1' && ( // Mostrar solo para userType === '1' (Paciente)
              <img src="../public/icon_student.png" alt="avatar" className='avatar' />
            )}
            {userType === '2' && ( // Mostrar solo para userType === '2' (Psicologo)
              <img src="../public/icon_student.png" alt="avatar" className='avatar' />
            )}
          </div>
          <div className={`new-patient ${userType === '2' ? 'admin-form' : ''}`}>
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
              {userType === '1' && (
                <div className="input-item">
                  <label className="required-label">Género <span>*</span></label>
                    <select name="genero" value={form.genero} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción</option>
                      <option value="Fluido">Fluido</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                </div>
              )}
              {userType === '2' && (
                <div className="input-item">
                  <label className="required-label">Edad <span>*</span></label>
                  <input type="text" name="edad" value={form.edad} onChange={handleChange} required />
                </div>
              )}
            </div>
            {userType === '1' && ( // Mostrar solo para userType === '1' (Paciente)
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
                  <label className="required-label">Contraseña <span>*</span></label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
              </div>
            )}
            <div className="input-row">
              <div className="input-item">
                <label className="required-label">Contacto <span>*</span></label>
                <input type="text" name="contacto" value={form.contacto} onChange={handleChange} required />
              </div>
              {userType === '1' && ( // Mostrar solo para userType === '1' (Paciente)
                <div className="input-item">
                  <label>Nombre del acudiente</label>
                  <input type="text" name="nombreAcudiente" value={form.nombreAcudiente} onChange={handleChange} />
                </div>
              )}
              <div className="input-item">
                <label className="required-label">Contacto de emergencia <span>*</span></label>
                <input type="text" name="contactoEmergencia" value={form.contactoEmergencia} onChange={handleChange} required />
              </div>
              {userType === '2' && (
                <div className="input-item">
                  <label className="required-label">Contraseña <span>*</span></label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
            )}
            </div>
            <button type="submit" className="submit-button">Añadir {userType === '2' ? 'psicólogo' : 'paciente'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoUsuario;

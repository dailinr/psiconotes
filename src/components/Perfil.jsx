import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Perfil = () => {
  const [form, setForm] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    email: '',
    edad: '',
    contacto: '',
    contactoEmergencia: '',
    username: '',
    password: ''
  });

  useEffect(() => {
    // Obtener la información del administrador desde el backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/administrador');
        if (!response.ok) {
          throw new Error('Error al obtener la información del administrador');
        }
        const data = await response.json();
        
        // Llenar el formulario con los datos obtenidos
        setForm({
          primerNombre: data.nombre.split(' ')[0] || '',
          segundoNombre: data.nombre.split(' ')[1] || '',
          primerApellido: data.apellido.split(' ')[0] || '',
          segundoApellido: data.apellido.split(' ')[1] || '',
          email: data.usuario.email,
          edad: data.edad,
          contacto: data.telefono,
          contactoEmergencia: data.contactoEmergencia,
          username: data.usuario.username,
          password: ''
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedAdmin = {
      nombre: `${form.primerNombre} ${form.segundoNombre}`,
      apellido: `${form.primerApellido} ${form.segundoApellido}`,
      estado: 'Activo',
      edad: form.edad, 
      telefono: form.contacto,
      contactoEmergencia: form.contactoEmergencia,
      usuario: {
        email: form.email,
        username: form.username,
        password: form.password || undefined,
        roles: [1] // Asume que el rol de administrador es 1
      }
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/administrador/actualizar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAdmin),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la información del administrador');
      }

      const data = await response.json();
      Swal.fire({
        icon: 'success',
        title: '¡Perfil actualizado!',
        text: 'La información del perfil ha sido actualizada correctamente.',
      });

      // Actualizar el formulario con los datos guardados (si es necesario)
      setForm({
        primerNombre: data.nombre.split(' ')[0] || '',
        segundoNombre: data.nombre.split(' ')[1] || '',
        primerApellido: data.apellido.split(' ')[0] || '',
        segundoApellido: data.apellido.split(' ')[1] || '',
        email: data.usuario.email,
        edad: data.edad,
        contacto: data.telefono,
        contactoEmergencia: data.contactoEmergencia,
        username: data.usuario.username,
        password: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Perfil</h2>
        <form onSubmit={handleSubmit}>
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
              <label className="required-label">Edad <span>*</span></label>
              <input type="text" name="edad" value={form.edad} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-item">
              <label className="required-label">Contacto <span>*</span></label>
              <input type="text" name="contacto" value={form.contacto} onChange={handleChange} required />
            </div>
            <div className="input-item">
              <label className="required-label">Contacto de emergencia <span>*</span></label>
              <input type="text" name="contactoEmergencia" value={form.contactoEmergencia} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-item">
              <label className="required-label">Nombre de usuario <span>*</span></label>
              <input type="text" name="username" value={form.username} onChange={handleChange} required />
            </div>
            <div className="input-item">
              <label className="required-label">Contraseña <span>*</span></label>
              <input type="password" name="password" value={form.password} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="submit-button">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;

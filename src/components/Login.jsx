import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/login.css'; // Importar el archivo CSS
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Login = ({ setIsAuthenticated, setUserType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar tu lógica de autenticación
    if (email === 'estudiante@e.com' && password === '123') {
      setIsAuthenticated(true);
      setUserType('3'); // Estudiante
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', '3');
      navigate('/');
    } else if(email === 'admin@e.com' && password === '123') {
      setIsAuthenticated(true);
      setUserType('2'); // Administrador
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', '2');
      navigate('/');
    } else if(email === 'psico@e.com' && password === '123') {
      setIsAuthenticated(true);
      setUserType('1'); // Psicólogo
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', '1');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

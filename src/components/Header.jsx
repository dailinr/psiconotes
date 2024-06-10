import React from 'react';

export const Header = ({ userType }) => {
  const renderUserRole = () => {
    switch (userType) {
      case '1':
        return 'Panel del psicólogo';
      case '2':
        return 'Panel del administrador';
      case '3':
        return 'Panel del estudiante';
    }
  };

  return (
    <header className="header shadow-sm p-1 border-bottom">
      <div className="logo">
        <a href="">
          <img className="logo-1" src="../public/logo-peq-removebg-preview.png" alt="Logo" />
          <span>PsicoNote</span>
        </a>
      </div>

      <div className="barra">
        <p>{renderUserRole()}</p>
      </div>

      <div className="dropdown text-end perfil">
        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>Fulanita Perez </strong>
          &nbsp; &nbsp;
          <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
        </a>
        
        <ul className="dropdown-menu text-small">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
        
        <p>{userType.charAt(0).toUpperCase() + userType.slice(1)}</p>
      </div>
    </header>
  );
};

export default Header;

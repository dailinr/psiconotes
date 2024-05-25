import React from 'react'

export const Header = () => {
  return (

    <header className="header shadow-sm p-1  border-bottom">

      <div className="logo">
        <a href="">
          <img className="logo-1" src="../public/logo-peq-removebg-preview.png" />
           <span>PsicoNote</span>
        </a>
      </div>
      
      <div className="barra  ">
       <p>Panel del psicólogo</p>
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
        
        <p >Psicólogo</p>
      </div> 

    </header>
  )
}

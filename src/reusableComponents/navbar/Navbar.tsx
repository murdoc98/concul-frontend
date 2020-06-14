import React from 'react';

//import "bootstrap/scss/bootstrap.scss";
import './Navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar">
        <a className="navbar-brand" href="/#">
          <img src={process.env.PUBLIC_URL + '/mediaResources/logo2.svg'} alt=""></img>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='navbar navbar-lg bg-main p-4 d-flex mb-4'>
      <div className="container">
      <Link to='/cardapio' className="navbar-brand text-light">Café XYZ</Link>
      <Link to='/login' className="navbar-brand text-light"><i className="bi-person" style={{fontSize: "40px"}}></i></Link>
      </div>
    </header>
  );
}

export default Header;
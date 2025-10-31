import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>RootSaúde</h2>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="header-cta">
          <button className="btn-primary">Cotação Online</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
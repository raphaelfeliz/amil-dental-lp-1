import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img 
            src="https://www.amildental.com.br/file/general/Amil_dental_Positiva_Colorida_RGB-01.png" 
            alt="AMIL Dental" 
            className="logo-image"
          />
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
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>RootSaúde</h3>
            <p>Cuidando da sua saúde com excelência e dedicação há mais de 20 anos.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Planos</h4>
            <ul>
              <li><a href="#">Individual</a></li>
              <li><a href="#">Familiar</a></li>
              <li><a href="#">Empresarial</a></li>
              <li><a href="#">Odontológico</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Central de Atendimento</a></li>
              <li><a href="#">Guia Médico</a></li>
              <li><a href="#">Área do Cliente</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📞 (11) 4000-1234</p>
              <p>📧 contato@rootsaude.com.br</p>
              <p>📍 Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 RootSaúde. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
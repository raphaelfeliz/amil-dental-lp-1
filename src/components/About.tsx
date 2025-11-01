import React from 'react';
import { Users, Building2, Headset } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="sobre">
      <div className="about-background"></div>
      <div className="about-overlay"></div>
      
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">
              Sobre a <span className="about-highlight">Amil Dental</span>
            </h2>
            
            <p className="about-description">
              Com mais de 20 anos no mercado, a Amil Dental é referência em 
              planos odontológicos, oferecendo segurança, qualidade e inovação 
              no cuidado com você e sua família.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <Users className="stat-icon" />
                <h3 className="stat-number">1M+</h3>
                <p className="stat-label">Clientes Atendidos</p>
              </div>
              
              <div className="stat-item">
                <Building2 className="stat-icon" />
                <h3 className="stat-number">5.000+</h3>
                <p className="stat-label">Rede Credenciada</p>
              </div>
              
              <div className="stat-item">
                <Headset className="stat-icon" />
                <h3 className="stat-number">24/7</h3>
                <p className="stat-label">Suporte Dedicado</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="phone-mockup">
              <div className="phone-camera"></div>
              <div className="phone-screen">
                <div className="phone-screen-bg animate-gradient-screen"></div>
                <div className="phone-content">
                  <div className="phone-logo animate-app-logo">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amil_logo.svg/1200px-Amil_logo.svg.png" 
                      alt="Logo Amil" 
                      className="logo-img"
                    />
                  </div>
                  <h3 className="phone-text animate-app-text">
                    A Inovação no Cuidado Odontológico
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


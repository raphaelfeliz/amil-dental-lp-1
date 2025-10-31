import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a RootSaúde</h2>
            <p>
              Há mais de 20 anos no mercado, a RootSaúde é referência em planos de saúde, 
              oferecendo segurança, qualidade e inovação no cuidado com você e sua família.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>1M+</h3>
                <p>Clientes Atendidos</p>
              </div>
              <div className="stat">
                <h3>5.000+</h3>
                <p>Rede Credenciada</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Suporte Médico</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <span>Imagem: Equipe médica profissional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
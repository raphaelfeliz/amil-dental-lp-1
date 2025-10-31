import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sua Saúde é Nossa Prioridade</h1>
            <p>
              Oferecemos os melhores planos de saúde com cobertura nacional, 
              atendimento 24h e uma rede credenciada de primeira qualidade.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Ver Planos</button>
              <button className="btn-secondary">Falar com Consultor</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <span>Imagem: Família feliz e saudável</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
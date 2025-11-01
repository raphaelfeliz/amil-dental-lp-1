import React from 'react';
import { Check, MoveRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero modern-hero" id="inicio">
      {/* Background decorative elements */}
      <div className="hero-bg-effect hero-bg-effect--top-left"></div>
      <div className="hero-bg-effect hero-bg-effect--bottom-right"></div>

      <div className="container">
      
        <div className="hero-content">
          
          <div className="hero-text">
              <h1 className="hero-title animate-fade-in-up">
            <span className="hero-highlight">Amil Dental</span> em 24h, online e sem burocracia.
          </h1>
            <p className='sub-title'>Veja List de Tratamentos com Início Imediato</p>

            <p className="hero-description animate-fade-in-up">
              Seu tratamento está disponível em 24h? Descubra aqui!
            </p>

            <div className="hero-buttons animate-fade-in-up">
              <button className="btn-primary hero-cta">
                Consultar tratamento
              </button>
              <button className="btn-secondary hero-cta-secondary">
                <span className="button-content">
                  <span className="button-text">Começar a Usar</span>
                  <MoveRight className="hero-icon" />
                </span>
              </button>
            </div>

            <div className="hero-trust-badges animate-fade-in-up">
              <div className="trust-badge">
                <Check className="trust-icon" />
                <span>Confiança Amil</span>
              </div>
              <div className="trust-badge">
                <Check className="trust-icon" />
                <span>Rede Nacional</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card animate-float">
              <div className="hero-card-glow"></div>
              <div className="hero-card-content">
                <div className="hero-card-inner-glow"></div>

                <div className="hero-image-container">
                  <div className="hero-shield animate-pulse-shield"></div>
                  <div className="hero-image-wrapper">
                    <img
                      src="src\assets\31 de out. de 2025, 21_27_20.png"
                      alt="Mulher protegida"
                      className="hero-image"
                    />
                  </div>
                </div>

                <h3 className="hero-card-title">Amil Dental</h3>
                <p className="hero-card-subtitle">Proteção completa para seu sorriso.</p>

                <div className="hero-progress-bars">
                  <div className="progress-bar progress-bar--primary"></div>
                  <div className="progress-bar progress-bar--secondary"></div>
                  <div className="progress-bar progress-bar--tertiary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

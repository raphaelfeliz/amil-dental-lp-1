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
              Plano Odontológico Amil.
              <br />
              <span className="hero-highlight">100% online</span> e confiável.
            </h1>
            
            <p className="hero-description animate-fade-in-up">
              Contrate sem burocracia e tenha acesso imediato à maior rede credenciada do país. 
              Cuidar do seu sorriso nunca foi tão fácil.
            </p>
            
            <div className="hero-buttons animate-fade-in-up">
              <button className="btn-primary hero-cta">
                Simular Agora
              </button>
              <button className="btn-secondary hero-cta-secondary">
                <span className="button-content">
                  <span className="button-text">Falar com Corretor</span>
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

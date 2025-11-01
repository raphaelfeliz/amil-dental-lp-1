import React from 'react';
import './Services.css';

interface Service {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
}

const services: Service[] = [
    { icon: '🏥', title: 'Rede Credenciada', description: 'Mais de 5.000 hospitais e clínicas em todo o Brasil', buttonText: 'Veja a rede' },
    { icon: '📞', title: 'Atendimento 24h', description: 'Suporte médico e orientação disponível a qualquer hora', buttonText: 'Veja tudo' },
    { icon: '💊', title: 'Cobertura Completa', description: 'Consultas, exames, cirurgias e medicamentos inclusos', buttonText: 'Veja tudo' },
    { icon: '🚑', title: 'Emergência', description: 'Atendimento de emergência rápido e eficiente', buttonText: 'Veja tudo' },
    { icon: '👨‍⚕️', title: 'Especialistas', description: 'Acesso a médicos especialistas de renome', buttonText: 'Veja tudo' },
    { icon: '📱', title: 'App Móvel', description: 'Gerencie seu plano pelo celular com facilidade', buttonText: 'Veja tudo' },
];

const Services: React.FC = () => {
    return (
        <section className="services-section" id="planos">
            {/* Background Effects */}
            <div className="hero-bg-effect bg-blue-600 bg-effect-top-left"></div>
            <div className="hero-bg-effect bg-cyan-500 bg-effect-bottom-right"></div>

            {/* Content Container */}
            <div className="services-container">
                {/* Section Header */}
                <div className="services-header animate-fade-in-up delay-1">
                    <h2 className="services-title">
                        Nossos <span className="services-title-highlight">Diferenciais</span>
                    </h2>
                    <p className="services-subtitle">
                        Conheça os benefícios exclusivos que oferecemos para cuidar da sua saúde
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className={`glass-card animate-fade-in-up delay-${index + 3}`}
                        >
                            <div className="card-icon">{service.icon}</div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                            
                            <a 
                                href="#" 
                                className="card-button"
                                onClick={(e) => e.preventDefault()}
                            >
                                {service.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

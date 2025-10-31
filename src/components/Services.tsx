import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🏥',
      title: 'Rede Credenciada',
      description: 'Mais de 5.000 hospitais e clínicas em todo o Brasil'
    },
    {
      icon: '📞',
      title: 'Atendimento 24h',
      description: 'Suporte médico e orientação disponível a qualquer hora'
    },
    {
      icon: '💊',
      title: 'Cobertura Completa',
      description: 'Consultas, exames, cirurgias e medicamentos inclusos'
    },
    {
      icon: '🚑',
      title: 'Emergência',
      description: 'Atendimento de emergência rápido e eficiente'
    },
    {
      icon: '👨‍⚕️',
      title: 'Especialistas',
      description: 'Acesso a médicos especialistas de renome'
    },
    {
      icon: '📱',
      title: 'App Móvel',
      description: 'Gerencie seu plano pelo celular com facilidade'
    }
  ];

  return (
    <section className="services" id="planos">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Diferenciais</h2>
          <p>Conheça os benefícios exclusivos que oferecemos para cuidar da sua saúde</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
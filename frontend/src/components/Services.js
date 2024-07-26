import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faGavel, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <section id="services">
            <h1>SERVICIOS</h1>
            <div className="services-container">
                <div className="service-item">
                    <FontAwesomeIcon icon={faBalanceScale} size="3x" />
                    <h3>Derecho Civil</h3>
                    <p>Asesoramiento y representación en casos de derecho civil, incluyendo contratos, herencias y disputas familiares.</p>
                </div>
                <div className="service-item">
                    <FontAwesomeIcon icon={faGavel} size="3x" />
                    <h3>Derecho Penal</h3>
                    <p>Defensa en casos penales, protegiendo tus derechos y garantizando un juicio justo.</p>
                </div>
                <div className="service-item">
                    <FontAwesomeIcon icon={faHandshake} size="3x" />
                    <h3>Derecho Laboral</h3>
                    <p>Servicios legales en el ámbito laboral, incluyendo contratos de trabajo, despidos y acoso laboral.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;

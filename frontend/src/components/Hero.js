import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-background.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Protegemos tus derechos. Agenda con nosotros</h1>
                    <p>Ofrecemos consultas legales personalizadas y efectivas. Nuestra experiencia en casos de divorcio, custodia y pensiones alimenticias garantiza soluciones justas para ti y tu familia.</p>
                    <Link to="/reservar">
                        <button className="hero-button">Agenda tu consulta gratuita</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;

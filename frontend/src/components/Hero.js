import React from 'react';
import heroImage from '../assets/hero-background.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div  className="hero-content">
                <h1>Protegemos tus derechos. Agenda con nosotros</h1>
                <p>Ofrecemos consultas legales personalizadas y efectivas. Nuestra experiencia en casos de divorcio, custodia y pensiones alimenticias garantiza soluciones justas para ti y tu familia.</p>
                <button className="hero-button">Agenda tu consulta gratuita</button>
            </div>
        </section>
    );
}

export default Hero;

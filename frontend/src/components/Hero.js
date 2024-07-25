import React from 'react';
import heroImage from '../assets/hero-background.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <h1>Protegemos tus derechos, agenda con nosotros</h1>
            <p>Ofrecemos consultas legales personalizadas y efectivas. Nuestra experiencia en casos de divorcio, custodia y pensiones alimenticias garantiza soluciones justas para ti y tu familia.</p>
            <button>Agenda tu consulta gratuita</button>
        </section>
    );
}

export default Hero;

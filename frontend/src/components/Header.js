import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><a href="#services" onClick={(e) => handleScrollToSection(e, 'services')}>Servicios</a></li>
                    <li><a href="#testimonials" onClick={(e) => handleScrollToSection(e, 'testimonials')}>Testimonios</a></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/reservar">Reservar</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

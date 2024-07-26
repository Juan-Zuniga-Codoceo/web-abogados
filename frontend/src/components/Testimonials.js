import React from 'react';
import cliente1 from '../assets/cliente1.jpg';
import cliente2 from '../assets/cliente2.jpg';
import cliente3 from '../assets/cliente3.jpg';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h1>TESTIMONIOS</h1>
            <div className="testimonials-carousel">
                <div className="testimonial-item">
                    <img src={cliente1} alt="Cliente 1" />
                    <blockquote>"La mejor abogada, muy profesional."</blockquote>
                    <cite>Karla Rodriguez</cite>
                </div>
                <div className="testimonial-item">
                    <img src={cliente2} alt="Cliente 2" />
                    <blockquote>"Me ayudó muchísimo en mi caso."</blockquote>
                    <cite>Camila Gonzalez</cite>
                </div>
                <div className="testimonial-item">
                    <img src={cliente3} alt="Cliente 3" />
                    <blockquote>"Altamente recomendada."</blockquote>
                    <cite>Juan Perez</cite>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

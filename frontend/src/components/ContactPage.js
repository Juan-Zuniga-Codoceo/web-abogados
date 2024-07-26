import React from 'react';

const ContactPage = () => {
    return (
        <section id="contact-page">
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Contacto</h2>
                    <form>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required autoComplete="name" />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required autoComplete="email" />

                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" required autoComplete="message"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="contact-card">
                    <h2>Información de Contacto</h2>
                    <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                    <p>Teléfono: +123 456 789</p>
                    <p>Email: contacto@abogada.com</p>
                    <p>Horario de Atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019908191889!2d144.9537363153171!3d-37.816279779751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f9dbb20645cb!2sGoogle!5e0!3m2!1sen!2sus!4v1631529423560!5m2!1sen!2sus"
                    width="80%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mapa"
                ></iframe>
            </div>
        </section>
    );
}

export default ContactPage;

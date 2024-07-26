import React from 'react';

const FAQ = () => {
    return (
        <section id="faq">
            <h1>PREGUNTAS FRECUENTES</h1>
            <div className="faq-container">
                <div className="faq-item">
                    <h3>¿Cuáles son los servicios que ofrece?</h3>
                    <p>Ofrecemos servicios en derecho civil, penal y laboral, incluyendo asesoramiento y representación legal.</p>
                </div>
                <div className="faq-item">
                    <h3>¿Cómo puedo agendar una consulta?</h3>
                    <p>Puedes agendar una consulta a través de nuestro sitio web utilizando el formulario de contacto o llamando a nuestro número de teléfono.</p>
                </div>
                <div className="faq-item">
                    <h3>¿Cuál es el costo de una consulta?</h3>
                    <p>El costo de una consulta inicial es de $50.000. Los costos adicionales dependerán de la complejidad del caso.</p>
                </div>
                <div className="faq-item">
                    <h3>¿Cuánto tiempo tarda en resolver un caso?</h3>
                    <p>El tiempo para resolver un caso depende de su complejidad y de los procedimientos legales involucrados. Sin embargo, nos esforzamos por resolver los casos lo más rápido posible.</p>
                </div>
                <div className="faq-item">
                    <h3>¿Qué debo llevar a mi primera consulta?</h3>
                    <p>Para tu primera consulta, trae cualquier documento relevante relacionado con tu caso, como contratos, correos electrónicos o correspondencia legal.</p>
                </div>
            </div>
        </section>
    );
}

export default FAQ;

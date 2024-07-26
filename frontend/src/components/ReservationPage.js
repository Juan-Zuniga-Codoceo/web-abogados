import React from 'react';


const ReservationPage = () => {
    return (
        <section id="schedule">
            <h2>Agendar Cita</h2>
            <p>Seleccione una fecha y hora conveniente para su consulta con la abogada.</p>
            <iframe
                src="https://calendly.com/zcja-1989/30min"
                width="100%"
                height="600"
                frameBorder="0"
                title="Calendario de Reservas"
            ></iframe>
        </section>
    );
}

export default ReservationPage;

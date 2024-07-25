import React from 'react';

const AppointmentScheduler = () => {
    return (
        <section id="schedule">
            <h2>Agendar Cita</h2>
            <p>Seleccione una fecha y hora conveniente para su consulta con la abogada.</p>
            <iframe
                src="https://calendly.com/tu-usuario/nombre-del-evento"
                width="100%"
                height="600"
                frameBorder="0"
                title="Calendario de Reservas"
            ></iframe>
        </section>
    );
}

export default AppointmentScheduler;

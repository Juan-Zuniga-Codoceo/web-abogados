const Appointment = require('../models/Appointment');

const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la cita' });
    }
};

// Otros controladores para obtener, actualizar y eliminar citas

module.exports = {
    createAppointment,
};

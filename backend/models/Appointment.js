const pool = require('../config/db');

const Appointment = {
    create: async (appointment) => {
        const { name, email, date, time } = appointment;
        const result = await pool.query(
            'INSERT INTO appointments (name, email, date, time) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, date, time]
        );
        return result.rows[0];
    },
    // Otros métodos para obtener, actualizar y eliminar citas
};

module.exports = Appointment;

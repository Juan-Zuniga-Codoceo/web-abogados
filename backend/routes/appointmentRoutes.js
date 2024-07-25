const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');
const router = express.Router();

router.post('/appointments', createAppointment);

// Otras rutas para obtener, actualizar y eliminar citas

module.exports = router;

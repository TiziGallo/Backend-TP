const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/empleadoPublicacionController');

// Rutas de Empleados
router.post('/empleados', ctrl.createEmpleado);

// Rutas de Publicaciones
router.post('/', ctrl.createPublicacion);
router.get('/', ctrl.getAllPublicaciones);
router.get('/buscar', ctrl.searchPublicaciones);

module.exports = router;
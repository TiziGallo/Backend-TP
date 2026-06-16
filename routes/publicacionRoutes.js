const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/empleadoPublicacionController');

router.post('/empleados', ctrl.createEmpleado);
router.get('/empleados', ctrl.getAllEmpleados);

router.post('/', ctrl.createPublicacion);
router.get('/', ctrl.getAllPublicaciones);
router.get('/buscar', ctrl.searchPublicaciones);

module.exports = router;
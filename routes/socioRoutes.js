const express = require('express');
const router = express.Router();
const socioController = require('../controllers/socioController');

router.post('/', socioController.createSocio);
router.get('/', socioController.getAllSocios);
router.get('/activos', socioController.getActiveSocios);
router.put('/:id', socioController.updateSocio);
router.delete('/:id', socioController.deleteSocio);

module.exports = router;
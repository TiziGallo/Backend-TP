const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/transaccionController');

router.post('/', ctrl.createTransaccion);
router.get('/', ctrl.getAllTransacciones);
router.get('/cliente/:email', ctrl.getByEmail);
router.get('/filtro/:origen/:destino', ctrl.getByIdiomas);

module.exports = router;
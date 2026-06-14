const Transaccion = require('../models/Transaccion');
const { Op } = require('sequelize'); // Importante para filtros

exports.createTransaccion = async (req, res) => {
    try {
        const t = await Transaccion.create(req.body);
        res.status(201).json(t);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

exports.getAllTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

exports.getByEmail = async (req, res) => {
    try {
        const historico = await Transaccion.findAll({ where: { emailCliente: req.params.email } });
        res.json(historico);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

exports.getByIdiomas = async (req, res) => {
    try {
        const { origen, destino } = req.params;
        const transacciones = await Transaccion.findAll({
            where: { idiomaOrigen: origen, idiomaDestino: destino }
        });
        res.json(transacciones);
    } catch (e) { res.status(500).json({ error: e.message }); }
};
const Socio = require('../models/Socio');

// Dar de alta un Socio (POST) [cite: 10]
exports.createSocio = async (req, res) => {
    try {
        const socio = await Socio.create(req.body);
        res.status(201).json(socio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Recuperar TODOS los Socios (GET) [cite: 10]
exports.getAllSocios = async (req, res) => {
    try {
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un Socio (DELETE) [cite: 10]
exports.deleteSocio = async (req, res) => {
    try {
        await Socio.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Socio eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Modificar un Socio (PUT) [cite: 10]
exports.updateSocio = async (req, res) => {
    try {
        await Socio.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Socio actualizado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Recuperar los socios ACTIVOS (GET) [cite: 10]
exports.getActiveSocios = async (req, res) => {
    try {
        const activos = await Socio.findAll({ where: { activo: true } });
        res.json(activos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
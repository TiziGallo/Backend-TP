const Empleado = require('../models/Empleado');
const Publicacion = require('../models/Publicacion');
const { Op } = require('sequelize');

exports.createEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.create(req.body);
        res.status(201).json(empleado);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

exports.createPublicacion = async (req, res) => {
    try {
        // req.body debe incluir empleadoId
        const publicacion = await Publicacion.create(req.body);
        res.status(201).json(publicacion);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

// 3. Recuperar TODAS las publicaciones incluyendo empleados (GET) [cite: 14]
exports.getAllPublicaciones = async (req, res) => {
    try {
        const pubs = await Publicacion.findAll({ include: Empleado });
        res.json(pubs);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

// 4. Búsqueda combinada: Título y Vigente (GET) [cite: 14]
exports.searchPublicaciones = async (req, res) => {
    try {
        const { titulo, vigente } = req.query;
        const where = {};
        
        if (titulo) where.titulo = { [Op.like]: `%${titulo}%` };
        if (vigente !== undefined) where.vigente = vigente;

        const pubs = await Publicacion.findAll({ where, include: Empleado });
        res.json(pubs);
    } catch (e) { res.status(500).json({ error: e.message }); }
};
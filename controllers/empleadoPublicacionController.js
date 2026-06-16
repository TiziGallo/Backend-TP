const Empleado = require('../models/Empleado');
const Publicacion = require('../models/Publicacion');
const { Op } = require('sequelize');

exports.createEmpleado = async (req, res) => {
    /*
 #swagger.tags = ['Empleados y publicaciones']
 #swagger.summary = 'Agregar un empleado'
 #swagger.description = 'Agrega un empleado a la lista de empleados.'
 #swagger.consumes = ['application/json']
 #swagger.parameters['body'] = {
 in: 'body',
 description: 'Datos del empleado a agregar.',
 required: true,
 schema: { $ref: '#/definitions/Empleado' }
 }
 #swagger.responses[200] = {
 description: 'Empleado agregado correctamente.',
 schema: { $ref: '#/definitions/Empleado' }
 }
 */
    try {
        const empleado = await Empleado.create(req.body);
        res.status(201).json(empleado);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

exports.createPublicacion = async (req, res) => {
    /*
 #swagger.tags = ['Empleados y publicaciones']
 #swagger.summary = 'Agregar una publicación'
 #swagger.description = 'Agrega una publicación a la lista de publicaciones.'
 #swagger.consumes = ['application/json']
 #swagger.parameters['body'] = {
 in: 'body',
 description: 'Datos de la publicación a agregar.',
 required: true,
 schema: { $ref: '#/definitions/Publicacion' }
 }
 #swagger.responses[200] = {
 description: 'Publicación agregada correctamente.',
 schema: { $ref: '#/definitions/Publicacion' }
 }
 */
    try {
        // req.body debe incluir empleadoId
        const publicacion = await Publicacion.create(req.body);
        res.status(201).json(publicacion);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

exports.getAllEmpleados = async (req, res) => {
  /*
 #swagger.tags = ['Empleados y publicaciones']
 #swagger.summary = 'Obtener todos los empleados'
 #swagger.description = 'Retorna una lista de todos los empleados.'
 #swagger.responses[200] = {
 description: 'Lista de empleados obtenida con éxito.',
 schema: { $ref: '#/definitions/Empleado' }
 }
 */
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (e) { res.status(500).json({ error: e.message }); }
};


exports.getAllPublicaciones = async (req, res) => {
    /*
 #swagger.tags = ['Empleados y publicaciones']
 #swagger.summary = 'Obtener todas las publicaciones'
 #swagger.description = 'Retorna una lista de todas las publicaciones.'
 #swagger.responses[200] = {
 description: 'Lista de publicaciones obtenida con éxito.',
 schema: { $ref: '#/definitions/Publicacion' }
 }
 */
    try {
        const pubs = await Publicacion.findAll({ include: Empleado });
        res.json(pubs);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

exports.searchPublicaciones = async (req, res) => {
    /*
    #swagger.tags = ['Empleados y publicaciones']
    #swagger.summary = 'Buscar publicaciones'
    #swagger.description = 'Busca publicaciones por título y/o vigencia'

    #swagger.parameters['titulo'] = {
        in: 'query',
        description: 'Texto contenido en el título',
        type: 'string'
    }

    #swagger.parameters['vigente'] = {
        in: 'query',
        description: 'Estado de vigencia',
        type: 'boolean'
    }

    #swagger.responses[200] = {
        description: 'Publicaciones encontradas'
    }
    */
    try {
        const { titulo, vigente } = req.query;
        const where = {};

        if (titulo) where.titulo = { [Op.like]: `%${titulo}%` };
        if (vigente !== undefined) where.vigente = vigente;

        const pubs = await Publicacion.findAll({
            where,
            include: Empleado
        });

        res.json(pubs);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
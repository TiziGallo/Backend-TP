const Transaccion = require('../models/Transaccion');
const { Op } = require('sequelize'); // Importante para filtros

exports.createTransaccion = async (req, res) => {
    /*
 #swagger.tags = ['Transacciones']
 #swagger.summary = 'Agregar una transacción'
 #swagger.description = 'Agrega una transacción a la lista de transacciones.'
 #swagger.consumes = ['application/json']
 #swagger.parameters['body'] = {
 in: 'body',
 description: 'Datos de la transacción a agregar.',
 required: true,
 schema: { $ref: '#/definitions/Transaccion' }
 }
 #swagger.responses[200] = {
 description: 'Transacción agregada correctamente.',
 schema: { $ref: '#/definitions/Transaccion' }
 }
 */ 
    try {
        const t = await Transaccion.create(req.body);
        res.status(201).json(t);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

exports.getAllTransacciones = async (req, res) => {
 /*
 #swagger.tags = ['Transacciones']
 #swagger.summary = 'Obtener todas las transacciones'
 #swagger.description = 'Retorna una lista de todas las transacciones.'
 #swagger.responses[200] = {
 description: 'Lista de transacciones obtenida con éxito.',
 schema: { $ref: '#/definitions/Transaccion' }
 }
 */
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

exports.getByEmail = async (req, res) => {
    /*
    #swagger.tags = ['Transacciones']
    #swagger.summary = 'Obtener historial por cliente'
    #swagger.description = 'Retorna todas las transacciones asociadas al email indicado.'

    #swagger.parameters['email'] = {
        in: 'path',
        description: 'Email del cliente',
        required: true,
        type: 'string',
        example: 'cliente@gmail.com'
    }

    #swagger.responses[200] = {
        description: 'Historial de transacciones del cliente',
        schema: { $ref: '#/definitions/Transaccion' }
    }
    */
    try {
        const historico = await Transaccion.findAll({
            where: {
                emailCliente: req.params.email
            }
        });

        res.json(historico);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.getByIdiomas = async (req, res) => {
    /*
    #swagger.tags = ['Transacciones']
    #swagger.summary = 'Filtrar transacciones por idioma'
    #swagger.description = 'Retorna todas las transacciones que coinciden con el idioma origen y destino recibidos por parámetro.'

    #swagger.parameters['origen'] = {
        in: 'path',
        description: 'Idioma de origen',
        required: true,
        type: 'string',
        example: 'es'
    }

    #swagger.parameters['destino'] = {
        in: 'path',
        description: 'Idioma de destino',
        required: true,
        type: 'string',
        example: 'en'
    }

    #swagger.responses[200] = {
        description: 'Lista de transacciones filtradas',
        schema: { $ref: '#/definitions/Transaccion' }
    }
    */
    try {
        const { origen, destino } = req.params;

        const transacciones = await Transaccion.findAll({
            where: {
                idiomaOrigen: origen,
                idiomaDestino: destino
            }
        });

        res.json(transacciones);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
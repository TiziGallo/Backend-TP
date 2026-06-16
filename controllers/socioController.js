const Socio = require('../models/Socio');

exports.createSocio = async (req, res) => {
    /*
 #swagger.tags = ['Socios']
 #swagger.summary = 'Agregar un socio'
 #swagger.description = 'Agrega un socio a la lista de socios.'
 #swagger.consumes = ['application/json']
 #swagger.parameters['body'] = {
 in: 'body',
 description: 'Datos del socio a agregar.',
 required: true,
 schema: { $ref: '#/definitions/Socio' }
 }
 #swagger.responses[200] = {
 description: 'Socio agregado correctamente.',
 schema: { $ref: '#/definitions/Socio' }
 }
 */ 
    try {
        const socio = await Socio.create(req.body);
        res.status(201).json(socio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllSocios = async (req, res) => {
   /*
 #swagger.tags = ['Socios']
 #swagger.summary = 'Obtener todos los socios'
 #swagger.description = 'Retorna una lista de todos los socios.'
 #swagger.responses[200] = {
 description: 'Lista de socios obtenida con éxito.',
 schema: { $ref: '#/definitions/Socio' }
 }
 */
    try {
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSocio = async (req, res) => {
    /*
    #swagger.tags = ['Socios']
    #swagger.summary = 'Eliminar un socio'
    #swagger.description = 'Elimina un socio por ID.'
    */
    try {
        await Socio.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Socio eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateSocio = async (req, res) => {
     /*
    #swagger.tags = ['Socios']
    #swagger.summary = 'Modificar un socio'
    #swagger.description = 'Modifica los datos de un socio existente.'
    */
    try {
        await Socio.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Socio actualizado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getActiveSocios = async (req, res) => {
  /*
 #swagger.tags = ['Socios']
 #swagger.summary = 'Obtener todos los socios activos'
 #swagger.description = 'Retorna una lista de todos los socios activos.'
 #swagger.responses[200] = {
 description: 'Lista de socios activos obtenida con éxito.',
 schema: { $ref: '#/definitions/Socio' }
 }
 */
    try {
        const activos = await Socio.findAll({ where: { activo: true } });
        res.json(activos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
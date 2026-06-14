const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Empleado = require('./Empleado');

const Publicacion = sequelize.define('Publicacion', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  contenido: { type: DataTypes.STRING, allowNull: false },
  imagenAsociada: { type: DataTypes.TEXT }, // Almacenar imagen base64 
  fechaPublicacion: { type: DataTypes.STRING }, // Gestionar como string 
  vigente: { type: DataTypes.BOOLEAN, defaultValue: true }
});

Publicacion.belongsTo(Empleado, { foreignKey: 'empleadoId' });

module.exports = Publicacion;
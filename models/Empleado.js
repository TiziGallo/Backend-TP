const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Empleado = sequelize.define('Empleado', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  dni: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Empleado;
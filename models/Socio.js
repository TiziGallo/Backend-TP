const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Socio = sequelize.define('Socio', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false
  }
});

module.exports = Socio;
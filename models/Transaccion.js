const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Transaccion = sequelize.define('Transaccion', {
  idiomaOrigen: { type: DataTypes.STRING, allowNull: false },
  textoOrigen: { type: DataTypes.DECIMAL, allowNull: false }, // O FLOAT según prefieras
  idiomaDestino: { type: DataTypes.STRING, allowNull: false },
  textoDestino: { type: DataTypes.DECIMAL, allowNull: false },
  emailCliente: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Transaccion;
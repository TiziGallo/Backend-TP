const express = require('express');
const { sequelize } = require('./config/db');
const socioRoutes = require('./routes/socioRoutes');
const transaccionRoutes = require('./routes/transaccionRoutes');
const publicacionRoutes = require('./routes/publicacionRoutes'); // Importamos las rutas del PTO 3

const app = express();

// Middleware para entender JSON
app.use(express.json());

// Rutas
app.use('/socios', socioRoutes);
app.use('/transacciones', transaccionRoutes);
app.use('/publicaciones', publicacionRoutes); // Registramos las rutas de publicaciones

// Sincronizar base de datos y arrancar servidor
sequelize.sync().then(() => {
    console.log('Base de datos conectada y sincronizada.');
    app.listen(3000, () => {
        console.log('Servidor corriendo en http://localhost:3000');
    });
}).catch(err => {
    console.error('Error al conectar la base de datos:', err);
});
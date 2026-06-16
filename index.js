const express = require('express');
const { sequelize } = require('./config/db');

const socioRoutes = require('./routes/socioRoutes');
const transaccionRoutes = require('./routes/transaccionRoutes');
const publicacionRoutes = require('./routes/publicacionRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();

app.use(express.json());

app.use('/socios', socioRoutes);
app.use('/transacciones', transaccionRoutes);
app.use('/publicaciones', publicacionRoutes);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos conectada y sincronizada.');

    app.listen(3000, () => {
        console.log('Servidor corriendo en http://localhost:3000');
    });
}).catch(err => {
    console.error('Error al conectar la base de datos:', err);
});
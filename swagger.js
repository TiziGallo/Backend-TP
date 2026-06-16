const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API TP Backend-Frontend',
    description: 'Documentación de la API para Socios, Transacciones, Empleados y Publicaciones'
  },

  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],

  tags: [
    {
      name: 'Socios',
      description: 'Gestión de socios'
    },
    {
      name: 'Transacciones',
      description: 'Gestión de transacciones'
    },
    {
      name: 'Empleados y publicaciones',
      description: 'Gestión de empleados y publicaciones'
    }
  ],

  definitions: {

    Empleado: {
      nombre: 'Juan',
      apellido: 'Perez',
      dni: '40111222',
      email: 'juan@gmail.com'
    },

    Publicacion: {
      titulo: 'Nueva publicación',
      contenido: 'Contenido de ejemplo',
      imagenAsociada: 'base64...',
      fechaPublicacion: '2026-06-16',
      vigente: true,
      empleadoId: 1
    },

    Socio: {
      nombre: 'Carlos',
      apellido: 'Gomez',
      dni: '40123456',
      activo: true
    },

    Transaccion: {
      idiomaOrigen: 'es',
      textoOrigen: 'Hola mundo',
      idiomaDestino: 'en',
      textoDestino: 'Hello world',
      emailCliente: 'cliente@gmail.com'
    }
  }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log(`Documentación generada en ${outputFile}`);
});
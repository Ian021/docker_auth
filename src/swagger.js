const swaggerAutogen = require('swagger-autogen')

const doc = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'API',
    description: 'Documentação',
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  host: 'localhost:4000',
}

swaggerAutogen()('./src/swagger.json', ['./routes/index.ts'], doc)

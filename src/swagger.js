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

  tags: [
    {
      name: 'Check',
      description: 'verificações do funcionamento do servidor e banco de dados',
    },
    {
      name: 'Auth',
      description:
        'API aberta de autenticação. Faça login para fazer a gestão de usuários',
    },
    {
      name: 'Users',
      description: 'API protegida de usuários. Faça login para utilizar',
    },
  ],
  host: 'localhost:4000',
}

swaggerAutogen()('./src/swagger.json', ['./routes/index.ts'], doc)

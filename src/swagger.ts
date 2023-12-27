import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'API de Usuários',
      version: '1.0.0',
      description:
        'Gestão de usuários protegida com autenticação e autorização',
    },

    basePath: '/',

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ['./src/routes/**/index.ts', './src/models/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec

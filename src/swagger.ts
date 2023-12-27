import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuários',
      version: '1.0.0',
      description:
        'Gestão de usuários protegida com autenticação e autorização',
    },
  },
  apis: ['./src/routes/**/index.ts', './src/models/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec

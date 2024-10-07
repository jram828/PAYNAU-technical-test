import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: 'Paynau People API',
      version: '1.0.0',
      description: 'This API stores and retrieves information about people',
    },
  },
  apis: ['./src/routes/*.js'], // Path to your API routes
};

const specs = swaggerJsdoc(options);

export default specs;
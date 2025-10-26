import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Desafio Final - API Cliente",
      version: "1.0.0",
      description: "API REST CRUD de Clientes — projeto do desafio final do bootcamp arquiteto de software da xpeducação",
    },
    servers: [{ url: "http://localhost:3000", description: "Local" }],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // não puxa JSDoc typescript perfeitamente, mas suficiente
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;

import express from "express";
import cors from "cors";
//import swaggerUI from "swagger-ui-express";
//import swaggerSpec from "./docs/swagger.ts"
import clienteRoutes from "./routes/clienteRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/clientes", clienteRoutes);

// Swagger UI
//app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/health", (req, res) => {
  res.send({ status: "ok" });
});

export default app;

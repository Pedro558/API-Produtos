import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js"
import clienteRoutes from "./routes/clienteRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clientes", clienteRoutes);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/health", (req, res) => {
  res.send({ status: "ok" });
});

export default app;

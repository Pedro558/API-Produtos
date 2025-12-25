import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js"
import clientRoutes from "./routes/clients.js";
import { errorHandler } from './middlewares/errorHandler.js'

export const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use("/api/clients", clientRoutes);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/health", (req, res) => {
  res.send({ status: "ok" });
});


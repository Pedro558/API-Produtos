import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ status: "ok" });
});

export default app;

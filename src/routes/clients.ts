import { Router } from "express";
import * as controller from "../controllers/clientController.js";

const router = Router();

router.get("/", controller.clientList);
router.get("/count", controller.countClients);
router.post("/", controller.createClient);
router.get("/name/:name", controller.searchByName);
router.get("/:id", controller.searchClientById);
router.put("/:id", controller.updateClient);
router.delete("/:id", controller.deleteClient);

export default router;

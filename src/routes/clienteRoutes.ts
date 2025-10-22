import { Router } from "express"
import * as controller from "../controllers/clienteController.js"

const  router = Router()

router.get("/", controller.listar)
router.post("/", controller.criar)

export default router
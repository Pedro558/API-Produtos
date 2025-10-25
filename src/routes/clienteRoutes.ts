import { Router } from "express"
import * as controller from "../controllers/clienteController.js"

const  router = Router()

router.get("/", controller.listar)
router.get("/contar", controller.contar)
router.get("/nome/:nome", controller.buscaPorNome)
router.get("/:id", controller.buscaId)
router.post("/", controller.criar)
router.put("/:id", controller.atualizar)
router.delete("/:id", controller.remover)

export default router
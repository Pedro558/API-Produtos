import { Router } from "express";
import * as controller from "../controllers/clienteController.js";

const router = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: Maria Silva
 *         email:
 *           type: string
 *           example: maria@example.com
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2025-10-25T12:00:00.000Z
 *     ClienteInput:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         nome:
 *           type: string
 *           example: João Souza
 *         email:
 *           type: string
 *           example: joao@example.com
 */

/**
 * @openapi
 * /api/clientes:
 *   get:
 *     summary: Lista todos os clientes cadastrados
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista completa de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get("/", controller.listar);

/**
 * @openapi
 * /api/clientes/contar:
 *   get:
 *     summary: Retorna a contagem total de clientes cadastrados
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Quantidade total de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 42
 */
router.get("/contar", controller.contar);

/**
 * @openapi
 * /api/clientes/nome/{nome}:
 *   get:
 *     summary: Busca clientes pelo nome
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: nome
 *         schema:
 *           type: string
 *         required: true
 *         description: Parte ou nome completo do cliente
 *     responses:
 *       200:
 *         description: Lista de clientes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Nenhum cliente encontrado com esse nome
 */
router.get("/nome/:nome", controller.buscaPorNome);

/**
 * @openapi
 * /api/clientes/{id}:
 *   get:
 *     summary: Busca um cliente pelo ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do cliente a ser buscado
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente não encontrado
 */
router.get("/:id", controller.buscaId);

/**
 * @openapi
 * /api/clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClienteInput'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Dados inválidos ou email já existente
 */
router.post("/", controller.criar);

/**
 * @openapi
 * /api/clientes/{id}:
 *   put:
 *     summary: Atualiza os dados de um cliente existente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do cliente a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClienteInput'
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente não encontrado
 *       400:
 *         description: Dados inválidos
 */
router.put("/:id", controller.atualizar);

/**
 * @openapi
 * /api/clientes/{id}:
 *   delete:
 *     summary: Remove um cliente do sistema
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do cliente a ser removido
 *     responses:
 *       204:
 *         description: Cliente removido com sucesso
 *       404:
 *         description: Cliente não encontrado
 */
router.delete("/:id", controller.remover);

export default router;

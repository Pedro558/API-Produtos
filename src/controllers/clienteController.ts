import type { Request, Response } from 'express';
import * as service from '../services/clienteService.js';

export const listar = async(req: Request, res: Response) => {
  const result = await service.listarTodos()
  res.json(result)
}

export const criar = async(req: Request, res: Response) => {
  const payload = req.body
  const novo = await service.salvar(payload)
  res.status(201).json(novo)
}
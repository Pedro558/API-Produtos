import type { Request, Response } from 'express';
import * as service from '../services/clienteService.js';

export const listar = async(req: Request, res: Response) => {
  const result = await service.listarTodos()
  res.json(result)
}

export const buscaId  = async(req: Request, res: Response) => {
  const id = Number(req.params.id)
  const cliente = await service.buscarPorId(id)
  if (!cliente) return res.status(404).json({error: "Cliente não encontrado"})
  res.json(cliente)
}

export const buscaPorNome = async(req: Request, res: Response) => {
  const nome = String(req.params.nome || "")
  const clientes = await service.buscarPorNome(nome)
  res.json(clientes)
}

export const contar = async(req: Request, res: Response) => {
  const count = await service.contar()
  res.json({count})
}

export const criar = async(req: Request, res: Response) => {
  const payload = req.body

  if (!payload.nome || !payload.email) {
    return res
      .status(400)
      .json({ error: "Propriedades 'nome' e 'email' são obrigatórias" });
  }

  const novo = await service.salvar(payload)
  res.status(201).json(novo)
}

export const atualizar = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const data = req.body
  const updated = await service.atualizar(id, data)
  if (!updated) return res.status(404).json({error: "Cliente não encontrado"})
  res.status(200).json(`Usuário ${updated.nome} atualizado com sucesso`)
}

export const remover = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const deleted = await service.deletar(id)
  if (!deleted) return res.status(404).json({error: "Cliente não encontrado"})
  res.status(200).json(`Usuário removido com sucesso`)
}
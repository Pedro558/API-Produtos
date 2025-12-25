import type { Request, Response } from "express";
import {
  clientCreateSchema,
  clientIdSchema,
  clientNameSchema,
  clientUpdateSchema,
} from "../schemas/clientSchemas.js";
import * as service from "../services/clientService.js";

export const clientList = async (req: Request, res: Response) => {
  try {
    const clients = await service.clientList();
    res
      .status(200)
      .json({ message: "Consulta realizada com sucesso!", data: clients });
  } catch (error) {
    res.status(404).json({ error: "Erro ao listar clientes" });
  }
};

export const searchClientById = async (req: Request, res: Response) => {
  try {
    const client = await service.searchClientById(Number(req.params.id));
    res.status(200).json({message: "Consulta realizada com sucesso!", data: client});
  } catch (error) {
    res.status(400).json({ error: "Busca inválida" });
  }
};
export const searchByName = async (req: Request, res: Response) => {
  try {
    const name = String(req.params.name || "");
    const clients = await service.searchByName(name);
    res.status(200).json({message: "Consulta realizada com sucesso!", data: clients});
    
  } catch (error) {
    res.status(404).json({ error: "Não foi encontrado nenhum cliente" });
  }
};

export const countClients = async (req: Request, res: Response) => {
  try {
    const count = await service.countClients();
    res
      .status(200)
      .json({ message: "A quantidade total de clientes é de: " + count });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar contagem" });
  }
};

export const createClient = async (req: Request, res: Response) => {
  try {
    const data = req.body;
  
    if (!data.nome || !data.email) {
      return res
        .status(400)
        .json({ error: "Propriedades 'nome' e 'email' são obrigatórias" });
    }
    const newClient = await service.createClient(data);
    res.status(201).json(newClient);
    
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar cliente" });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const updated = await service.updateClient(id, data);
    if (!updated)
      return res.status(404).json({ error: "Cliente não encontrado" });
    res.status(200).json(`Usuário ${updated.nome} atualizado com sucesso`);
    
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar usuário" });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await service.deleteClient(id);
    if (!deleted)
      return res.status(404).json({ error: "Cliente não encontrado" });
    res.status(200).json(`Usuário removido com sucesso`);
  } catch (error) {
    res.status(400).json({ error: "Erro ao remover usuário" });
  }
};

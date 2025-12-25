import type { Client } from "../models/client.js";
import prisma from "../prismaClient.js";
import { AppError } from "../utils/AppError.js";
import type {
  ClientCreateInput,
  ClientUpdateInput,
} from "../schemas/clientSchemas.js";

export const clientList = async (): Promise<Client[]> => {
  return prisma.cliente.findMany({ orderBy: { id: "asc" } });
};

export const countClients = async (): Promise<number> => {
  const count = await prisma.cliente.count();
  return count;
};

export const searchByName = async (nome: string): Promise<Client[]> => {
  const clients = await prisma.cliente.findMany({
    where: { nome: { contains: nome, mode: "insensitive" } },
    orderBy: { id: "asc" },
  });
  if (clients.length === 0)
    throw new AppError("Nenhum cliente encontrado", 404);
  return clients;
};

export const searchClientById = async (id: number): Promise<Client> => {
    const client = await prisma.cliente.findUnique({ where: { id } });
    if (!client) throw new AppError("Cliente não encontrado", 404);
    return client;
};

export const createClient = async (data: ClientCreateInput): Promise<Client> => {
  const checkEmailExists = await prisma.cliente.findUnique({ where: { email: data.email}})
  if (checkEmailExists)
    throw new AppError(
      "Já existe um cliente com este email",
      400,
      "EMAIL_DUPLICADO"
    );
    return prisma.cliente.create({ data: data });
};

export const updateClient = async (id: number, data: ClientUpdateInput): Promise<Client | null> => {
  await searchClientById(id);
  
  if(data.email){
    const checkClientExists = await prisma.cliente.findUnique({where: {email: data.email}})
    if(checkClientExists && checkClientExists.id !== id){
      throw new AppError("Já existe um cliente com este email", 400, "EMAIL_DUPLICADO")
    }
  }

  return prisma.cliente.update({ where: { id }, data: data });
};

export const deleteClient = async (id: number): Promise<boolean> => {
    await prisma.cliente.delete({ where: { id } });
    return true;
};

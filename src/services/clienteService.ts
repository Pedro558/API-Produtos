import type { Cliente } from '../models/cliente.js'
import prisma from "../prismaClient.js"

export const listarTodos = async(): Promise<Cliente[]> => {
  return prisma.cliente.findMany()
}

export const buscarPorId = async(id: number): Promise<Cliente | null> => {
  return prisma.cliente.findUnique({ where: { id }})
}

export const buscarPorNome = async(nome: string): Promise<Cliente[]> => {
  return prisma.cliente.findMany({
    where: {
      nome: {
        contains: nome,
        mode: "insensitive"
      },
    },
  });
}

export const contar = async(): Promise<number> => {
  return prisma.cliente.count()
}

export const salvar = async(data:Cliente): Promise<Cliente> =>{
  return prisma.cliente.create({ data}) 
}

export const atualizar = async(id: number, data: Partial<Cliente>): Promise<Cliente | null> => {
  try {
    return prisma.cliente.update({
      where: { id },
      data
    })
    
  } catch (error) {
    return null
  }
}

export const deletar = async(id: number): Promise<boolean> => {
  try{
    await prisma.cliente.delete({ where: { id }})
    return true
  } catch(error){
      return false
    }

}
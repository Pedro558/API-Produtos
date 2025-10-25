import type { Cliente } from '../models/cliente.js'

let clientes: Cliente[] = []
let currentId = 1

export const listarTodos = async(): Promise<Cliente[]> => clientes

export const buscarPorId = async(id: number): Promise<Cliente | null> => {
  return clientes.find(cliente => cliente.id === id) || null
}

export const buscarPorNome = async(nome: string): Promise<Cliente[]> => {
  return clientes.filter(cliente => cliente.nome.toLowerCase().includes(nome.toLowerCase()))
}

export const contar = async(): Promise<number> => clientes.length

export const salvar = async(data:Cliente): Promise<Cliente> =>{
  const novo: Cliente = {
    ...data,
    id: currentId++,
    createdAt: new Date()
  }
  clientes.push(novo)
  return novo
}

export const atualizar = async(id: number, data: Partial<Cliente>): Promise<Cliente | null> => {
  const userId = clientes.findIndex(cliente => cliente.id ===id)
  if (userId === -1) return null
  clientes[userId] = {
    ...clientes[userId],
    ...data
  }
  return clientes[userId]
}

export const deletar = async(id: number): Promise<boolean> => {
  const initialLength = clientes.length
  clientes = clientes.filter(cliente => cliente.id !== id)
  return clientes.length < initialLength
}
import type { Cliente } from '../models/cliente.js'

let clientes: Cliente[] = []
let currentId = 1

export const listarTodos = async(): Promise<Cliente[]> => clientes

export const salvar = async(data:Cliente): Promise<Cliente> =>{
  const novo: Cliente = {
    ...data,
    id: currentId++,
    createdAt: new Date()
  }
  clientes.push(novo)
  return novo
}
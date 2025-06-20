// src/repositories/userRepositories.js
import prisma from '../prismaClient.js'

export function getAllMotorista() {
  return prisma.motorista.findMany()
}

export function addMotorista(nome, email, telefone, dataNascimento, cpf, cnh) {
  return prisma.motorista.create({
    data: { nome, cpf, cnh, 
        dataNascimento: new Date(dataNascimento),
         email, telefone }
  })
}

export async function deleteMotorista(id) {
  return prisma.motorista.delete({ where: { id } })
}

export async function updateMotorista(id, dados) {
  return prisma.motorista.update({
    where: { id: Number(id) },
    data: {
      nome:             dados.nome,
      cpf:              dados.cpf,
      cnh:              dados.cnh,
      telefone:         dados.telefone,
      email:            dados.email,
      dataNascimento:   dados.dataNascimento ? new Date(dados.dataNascimento) : undefined
    }
  })
}


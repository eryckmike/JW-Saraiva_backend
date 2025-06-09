// src/repositories/userRepositories.js
import prisma from '../prismaClient.js'

export function getAllVeiculo() {
  return prisma.veiculo.findMany()
}

export function addVeiculo( placa, id, cor, categoria ) {
  return prisma.veiculo.create({
    data: {  placa, id, cor, categoria }
  })
}

export async function deleteVeiculo(id) {
  return prisma.veiculo.delete({ where: { id } })
}

export async function updateVeiculo(id, cor, categoria) {
  return prisma.veiculo.update({
    where: { id },
    data: { cor, categoria }
  })
}
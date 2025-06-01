// src/repositories/userRepositories.js
import prisma from '../prismaClient.js'

export function getAllUsers() {
  return prisma.user.findMany()
}

export function addUser(name, email, password) {
  return prisma.user.create({
    data: { name, email, password }
  })
}

export async function deleteUser(id) {
  return prisma.user.delete({ where: { id } })
}

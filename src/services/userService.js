// src/services/userService.js
import * as userRepo from '../repositories/userRepositories.js'

export function getAllUsers() {
  return userRepo.getAllUsers()
}

export function addUser(name, email, password) {
  return userRepo.addUser(name, email, password)
}

export function deleteUser(id) {
  return userRepo.deleteUser(id)
}

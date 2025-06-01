// src/services/userService.js
import * as motoRepo from '../repositories/motoristaRepositories.js';


export function getAllMotorista() {
  return motoRepo.getAllMotorista()
}

export function addMotorista(nome, email, telefone, dataNascimento, cpf, cnh) {
  return motoRepo.addMotorista(nome, email, telefone, dataNascimento, cpf, cnh) 
}

export function deleteMotorista(id) {
  return motoRepo.deleteMotorista(id)
}

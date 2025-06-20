
import * as motoRepo from '../repositories/veiculoRepositories.js';


export function getAllVeiculo() {
  return motoRepo.getAllVeiculo()
}

export function addVeiculo( placa, id, cor, categoria ) {
  return motoRepo.addVeiculo( placa, id, cor, categoria ) 
}

export function deleteVeiculo(id) {
  return motoRepo.deleteVeiculo(id)
}

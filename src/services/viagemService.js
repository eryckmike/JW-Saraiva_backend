import * as viagemRepo from '../repositories/viagemRepositories.js'

export function getAllViagens() {
  return viagemRepo.getAllViagens()
}

export function agendarViagem(dataSaida, veiculoId, motoristaId, origem, destino) {
    return viagemRepo.addViagem(dataSaida, veiculoId, motoristaId, origem, destino)
}

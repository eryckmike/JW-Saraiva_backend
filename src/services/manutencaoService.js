import * as repo from '../repositories/manutencaoRepositories.js'

export function listarManutencoes() {
  return repo.getAllManutencoes()
}

export function agendarManutencao(dataEntrada, dataSaidaEstimad, motivo, veiculoId) {
  return repo.addManutencao(dataEntrada, dataSaidaEstimad, motivo, veiculoId)
}

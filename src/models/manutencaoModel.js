export class Manutencao {
  constructor({ id, dataEntrada, dataSaidaEstimad, motivo, veiculo }) {
    this.id                = id
    this.dataEntrada       = dataEntrada
    this.dataSaidaEstimad  = dataSaidaEstimad
    this.motivo            = motivo
    this.veiculo           = veiculo // { id, nome, codigo, placa }
  }

  /** fábrica que garante campos mínimos */
  static agendar({ dataEntrada, dataSaidaEstimad, motivo, veiculo }) {
    return new Manutencao({
      dataEntrada:      new Date(dataEntrada),
      dataSaidaEstimad: new Date(dataSaidaEstimad),
      motivo,
      veiculo
    })
  }
}

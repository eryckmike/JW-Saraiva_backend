// src/models/viagemModel.js
export class Viagem {
  constructor({ id, dataSaida, dataVolta, origem, destino,  veiculo, motorista }) {
    this.id         = id
    this.dataSaida  = dataSaida
    this.dataVolta  = dataVolta
    this.origem     = origem    
    this.destino    = destino    
    this.veiculo    = veiculo    
    this.motorista  = motorista  
  }

  
  static agendar({ dataSaida, veiculo, motorista }) {
    const ds = new Date(dataSaida)
    const dv = new Date(ds.getTime() + 30*24*60*60*1000)
    return new Viagem({ dataSaida: ds, dataVolta: dv, origem: "", destino: "", veiculo, motorista })
  }

  
  tempoRestante() {
    const diff = this.dataVolta.getTime() - Date.now()
    return {
      dias:    Math.max(Math.floor(diff / (1000*60*60*24)), 0),
      horas:   Math.max(Math.floor((diff / (1000*60*60)) % 24), 0),
      minutos: Math.max(Math.floor((diff / (1000*60)) % 60), 0)
    }
  }

  
  precisaAlerta(antesDeDias = 3) {
    return this.tempoRestante().dias <= antesDeDias
  }
}

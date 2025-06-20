const { Veiculo } = require('../models/veiculoModel');
const { Viagem } = require('../models/viagemModel');

async function bloquearVeiculosForaPrazo() {
  const viagens = await Viagem.findAll(); 
  const agora = Date.now();
  const MS_30_DIAS = 30 * 24 * 60 * 60 * 1000;

  for (let v of viagens) {
    if (v.dataSaida && !v.dataVolta) {
      const prazo = new Date(v.dataSaida).getTime() + MS_30_DIAS;
      if (agora > prazo) {
        
        await Veiculo.updateOne({ id: v.veiculo.id }, { bloqueado: 1 });
      }
    }
  }
}

setInterval(bloquearVeiculosForaPrazo, 12 * 60 * 60 * 1000); 

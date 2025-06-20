import prisma from '../prismaClient.js'
import { Viagem } from '../models/viagemModel.js'

export async function getAllViagens() {
  const regs = await prisma.viagem.findMany({
    include: { veiculo: true, motorista: true },
    orderBy: { dataSaida: 'desc' }
  })

  return regs.map(r => new Viagem({
    id:        r.id,
    dataSaida: r.dataSaida,
    dataVolta: r.dataVolta,
    origem:    r.origem,
    destino:   r.destino,
    veiculo:   { id: r.veiculo.id, codigo: r.veiculo.id, nome: r.veiculo.nome, placa: r.veiculo.placa },
    motorista: { id: r.motorista.id, nome: r.motorista.nome, email: r.motorista.email }
  }))
}


export function addViagem(dataSaida, veiculoId, motoristaId, origem, destino) {
  const ds = new Date(dataSaida)
  const dv = new Date(ds.getTime() + 30*24*60*60*1000)

  return prisma.viagem.create({
    data: { dataSaida: ds, dataVolta: dv, origem, destino, veiculoId, motoristaId },
    include: { veiculo: true, motorista: true }
  })
}

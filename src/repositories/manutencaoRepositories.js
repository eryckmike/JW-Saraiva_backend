import prisma from '../prismaClient.js'
import { Manutencao } from '../models/manutencaoModel.js'

export async function getAllManutencoes() {
  const regs = await prisma.manutencao.findMany({
    include: {
      veiculo: { select: { id: true, placa: true, cor: true, categoria: true } }
    },
    orderBy: { dataEntrada: 'desc' }
  })
  return regs.map(r =>
    new Manutencao({
      id:                r.id,
      dataEntrada:       r.dataEntrada,
      dataSaidaEstimad:  r.dataSaidaEstimad,
      motivo:            r.motivo,
      veiculo:           r.veiculo
    })
  )
}

export function addManutencao(dataEntrada, dataSaidaEstimad, motivo, veiculoId) {
  return prisma.manutencao.create({
    data: {
      dataEntrada:      new Date(dataEntrada),
      dataSaidaEstimad: new Date(dataSaidaEstimad),
      motivo,
      veiculoId
    },
    include: {
      veiculo: { select: { id: true, placa: true, cor: true, categoria: true } }
    }
  })
}

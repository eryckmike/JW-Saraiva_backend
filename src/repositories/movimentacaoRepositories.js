import prisma from '../prismaClient.js'

/**
 * Busca todas as viagens e transforma em registros de entrada/saída
 */
export async function getAllMovimentacoes() {
  const viagens = await prisma.viagem.findMany({
    include: { veiculo: true, motorista: true },
    orderBy: { dataSaida: 'desc' }
  })

  const registros = []

  viagens.forEach(v => {
    // Registro de saída
    registros.push({
      id:      v.id * 2,
      data:    v.dataSaida.toISOString().split('T')[0],
      horario: v.dataSaida.toISOString().substr(11,5),
      tipo:    'Saída',
      codigoVeiculo: v.veiculo.placa,
      motorista:     v.motorista.nome
    })

    // Registro de entrada (retorno)
    registros.push({
      id:      v.id * 2 + 1,
      data:    v.dataVolta.toISOString().split('T')[0],
      horario: v.dataVolta.toISOString().substr(11,5),
      tipo:    'Entrada',
      codigoVeiculo: v.veiculo.placa,
      motorista:     v.motorista.nome
    })
  })

  // Ordena do mais recente para o mais antigo
  registros.sort((a, b) => {
    const dta = new Date(`${a.data}T${a.horario}:00`)
    const dtb = new Date(`${b.data}T${b.horario}:00`)
    return dtb - dta
  })

  return registros
}

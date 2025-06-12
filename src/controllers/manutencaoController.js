import { listarManutencoes, agendarManutencao } from '../services/manutencaoService.js'

export async function getManutencoes(_req, res) {
  try {
    const lista = await listarManutencoes()
    res.json(lista)
  } catch (err) {
    console.error('Erro ao listar manutenções:', err)
    res.status(500).json({ erro: 'Não foi possível listar manutenções.' })
  }
}

export async function postManutencao(req, res) {
  try {
    const { dataEntrada, dataSaidaEstimad, motivo, veiculoId } = req.body
    if (!dataEntrada || !dataSaidaEstimad || !motivo || !veiculoId) {
      return res.status(400).json({ erro: 'dataEntrada, dataSaidaEstimad, motivo e veiculoId são obrigatórios.' })
    }
    const m = await agendarManutencao(dataEntrada, dataSaidaEstimad, motivo, veiculoId)
    res.status(201).json(m)
  } catch (err) {
    console.error('Erro ao criar manutenção:', err)
    // tratar FK violation se veiculoId inválido
    if (err.code === 'P2003') {
      return res.status(400).json({ erro: 'veiculoId inválido.' })
    }
    res.status(500).json({ erro: 'Falha ao criar manutenção: ' + err.message })
  }
}

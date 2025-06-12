import * as movRepo from '../repositories/movimentacaoRepositories.js'

export async function getMovimentacoes(_req, res) {
  try {
    const lista = await movRepo.getAllMovimentacoes()
    res.json(lista)
  } catch (err) {
    console.error('Erro ao listar movimentações:', err)
    res.status(500).json({ erro: 'Não foi possível listar movimentações.' })
  }
}

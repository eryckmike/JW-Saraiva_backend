import * as veiculoService from '../services/veiculoService.js'

export async function getAllVeiculo(req, res) {
  try {
    const veiculo = await veiculoService.getAllVeiculo()
    return res.json(veiculo)
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
}

export async function addVeiculo(req, res) {
  try {
    const { placa, id, cor, categoria } = req.body
    const veiculo = await veiculoService.addVeiculo( placa, id, cor, categoria )
    return res.status(201).json(veiculo)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

export async function deleteVeiculo(req, res) {
  try {
    const { id } = req.params
    await veiculoService.deleteVeiculo(Number(id))
    return res.status(204).send()
  } catch (err) {
    return res.status(404).json({ error: err.message })
  }
}

export default {
  getAllVeiculo,
  addVeiculo,
  deleteVeiculo
}

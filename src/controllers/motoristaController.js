import * as motoristaService from '../services/motoristaService.js'

export async function getAllMotorista(req, res) {
  try {
    const motorista = await motoristaService.getAllMotorista()
    return res.json(motorista)
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
}

export async function addMotorista(req, res) {
  try {
    const { nome, email, telefone, dataNascimento, cpf, cnh } = req.body
    const motorista = await motoristaService.addMotorista(nome, email, telefone, dataNascimento, cpf, cnh)
    return res.status(201).json(motorista)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

export async function deleteMotorista(req, res) {
  try {
    const { id } = req.params
    await motoristaService.deleteMotorista(Number(id))
    return res.status(204).send()
  } catch (err) {
    return res.status(404).json({ error: err.message })
  }
}

export async function updateMotorista(req, res) {
  try {
    const { id } = req.params
    const dados  = req.body
    const atualizado = await motoristaService.updateMotorista(id, dados)
    return res.json(atualizado)
  } catch (err) {
    console.error('Erro ao atualizar motorista:', err)
    return res.status(500).json({ error: 'Não foi possível atualizar motorista.' })
  }
}

export default {
  getAllMotorista,
  addMotorista,
  deleteMotorista,
  updateMotorista
}

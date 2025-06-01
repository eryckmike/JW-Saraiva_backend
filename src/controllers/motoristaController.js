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

export default {
  getAllMotorista,
  addMotorista,
  deleteMotorista
}

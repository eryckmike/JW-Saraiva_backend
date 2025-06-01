// src/controllers/userController.js
import * as userService from '../services/userService.js'

export async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers()
    return res.json(users)
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
}

export async function addUser(req, res) {
  try {
    const { name, email, password } = req.body
    const user = await userService.addUser(name, email, password)
    return res.status(201).json(user)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params
    await userService.deleteUser(Number(id))
    return res.status(204).send()
  } catch (err) {
    return res.status(404).json({ error: err.message })
  }
}

export default {
  getAllUsers,
  addUser,
  deleteUser
}

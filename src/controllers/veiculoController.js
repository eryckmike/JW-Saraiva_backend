import * as veiculoService from '../services/veiculoService.js'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export async function getAllVeiculo(req, res) {
  try {
    const { placa } = req.query;
    const filtro = placa
      ? { where: { placa: { contains: String(placa), mode: 'insensitive' } } }
      : {};
    const veiculos = await prisma.veiculo.findMany(filtro);
    return res.json(veiculos);
  } catch (err) {
  console.error('[VeiculoService] erro em findAll:', err);
  throw err;
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

export async function updateVeiculo(req, res) {
  const { id } = req.params;
  const { cor, categoria } = req.body;

  try {
    const atualizado = await prisma.veiculo.update({
      where: { id: Number(id) },
      data: { cor, categoria }
    });
    return res.json(atualizado);
  } catch (err) {
    console.error('Erro ao atualizar veículo:', err);
    return res.status(500).json({ error: 'Erro ao atualizar veículo' });
  }
}

export default {
  getAllVeiculo,
  addVeiculo,
  deleteVeiculo,
  updateVeiculo
}

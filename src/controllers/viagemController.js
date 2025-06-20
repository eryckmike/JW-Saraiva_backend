// src/controllers/viagemController.js
import prisma from '../prismaClient.js';

export async function getAllViagens(_req, res) {
  try {
    const viagens = await prisma.viagem.findMany({
      include: {
        motorista: true,
        veiculo: true
      }
    });
    return res.json(viagens);
  } catch (err) {
    console.error('Erro ao listar viagens:', err);
    return res.status(500).json({ error: 'Não foi possível listar viagens.' });
  }
}

export async function createViagem(req, res) {
  try {
    const { dataSaida, dataVolta, motoristaId, veiculoId, origem, destino } = req.body;
    const nova = await prisma.viagem.create({
      data: {
        dataSaida:  new Date(dataSaida),
        dataVolta:  dataVolta ? new Date(dataVolta) : null,
        motorista: { connect: { id: motoristaId } },
        veiculo:   { connect: { id: veiculoId } },
        origem,
        destino
      },
      include: { motorista: true, veiculo: true }
    });
    return res.status(201).json(nova);
  } catch (err) {
    console.error('Erro ao criar viagem:', err);
    return res.status(400).json({ error: 'Não foi possível criar viagem.' });
  }
}

export async function deleteViagem(req, res) {
  try {
    const { id } = req.params;
    await prisma.viagem.delete({ where: { id: Number(id) } });
    return res.status(204).end();
  } catch (err) {
    console.error('Erro ao deletar viagem:', err);
    return res.status(400).json({ error: 'Não foi possível deletar viagem.' });
  }
}

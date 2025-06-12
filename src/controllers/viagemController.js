// src/controllers/viagemController.js

import { agendarViagem, getAllViagens } from '../services/viagemService.js';

/**
 * GET /viagens
 */
export async function listarViagens(req, res) {
  try {
    const lista = await getAllViagens();
    return res.json(lista);
  } catch (err) {
    console.error("Erro em listarViagens:", err);
    return res.status(500).json({ erro: "Não foi possível listar viagens." });
  }
}

/**
 * POST /viagens
 */
export async function criarViagem(req, res) {
  try {
    const { dataSaida, veiculoId, motoristaId, origem, destino } = req.body;
    if (!dataSaida || !veiculoId || !motoristaId || !origem || !destino) {
      return res.status(400).json({
        erro:
          "Os campos dataSaida, veiculoId, motoristaId, origem e destino são obrigatórios."
      });
    }
    const viagem = await agendarViagem(
      dataSaida,
      veiculoId,
      motoristaId,
      origem,
      destino
    );
    return res.status(201).json(viagem);
  } catch (error) {
    console.error("Erro ao criarViagem:", error);
    return res
      .status(500)
      .json({ erro: "Falha ao criar viagem: " + error.message });
  }
}

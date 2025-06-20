// src/routes/userRoutes.js
import { Router } from 'express'
import veiculoController from '../controllers/veiculoController.js'

const router = Router()

router.get('/',      veiculoController.getAllVeiculo)
router.post('/',     veiculoController.addVeiculo)
router.delete('/:id', veiculoController.deleteVeiculo)
router.put('/:id', veiculoController.updateVeiculo)
router.patch('/:id/desbloquear', async (req, res) => {
  const { id } = req.params;
  await Veiculo.updateOne({ id: Number(id) }, { bloqueado: 0 });
  res.json({ ok: true });
});


export default router

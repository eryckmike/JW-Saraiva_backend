// src/routes/userRoutes.js
import { Router } from 'express'
import veiculoController from '../controllers/veiculoController.js'

const router = Router()

router.get('/',      veiculoController.getAllVeiculo)
router.post('/',     veiculoController.addVeiculo)
router.delete('/:id', veiculoController.deleteVeiculo)
router.put('/:id', veiculoController.updateVeiculo)

export default router

// src/routes/userRoutes.js
import { Router } from 'express'
import motoristaController from '../controllers/motoristaController.js'

const router = Router()

router.get('/',      motoristaController.getAllMotorista)
router.post('/',     motoristaController.addMotorista)
router.delete('/:id', motoristaController.deleteMotorista)

export default router

import { Router } from 'express'
import { getManutencoes, postManutencao } from '../controllers/manutencaoController.js'

const router = Router()
router.get('/',  getManutencoes)
router.post('/', postManutencao)
export default router

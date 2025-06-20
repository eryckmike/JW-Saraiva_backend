import { Router } from 'express'
import { getMovimentacoes } from '../controllers/movimentacaoController.js'

const router = Router()


router.get('/', getMovimentacoes)

export default router

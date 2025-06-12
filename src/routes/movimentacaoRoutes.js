import { Router } from 'express'
import { getMovimentacoes } from '../controllers/movimentacaoController.js'

const router = Router()

// Rota consumida pela página /entradas-saidas
router.get('/', getMovimentacoes)

export default router

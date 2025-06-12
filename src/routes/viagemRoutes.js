import { Router } from 'express'
import { listarViagens, criarViagem } from '../controllers/viagemController.js'

const router = Router()
router.get('/',    listarViagens)
router.post('/',   criarViagem)

export default router

// src/routes/userRoutes.js
import { Router } from 'express'
import userController from '../controllers/userController.js'

const router = Router()

router.get('/',      userController.getAllUsers)
router.post('/',     userController.addUser)
router.delete('/:id', userController.deleteUser)

export default router

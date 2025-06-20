import { Router } from 'express';
import * as viagemController from '../controllers/viagemController.js';

const router = Router();

router.get   ('/',        viagemController.getAllViagens);
router.post  ('/',        viagemController.createViagem);
router.delete('/:id',    viagemController.deleteViagem);

export default router;

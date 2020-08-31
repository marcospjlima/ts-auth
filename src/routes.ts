import { Router }from 'express';

import authMiddleware from './app/middleware/authMiddleware';

import UserController from './app/controller/UserController';
import AuthControler from './app/controller/AuthControler';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthControler.authenticate);
router.get('/users', authMiddleware, UserController.index);

export default router; 
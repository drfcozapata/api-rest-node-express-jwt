import { Router } from 'express';
import { addUser, loginUser } from '../controllers/user.controller';

const router = Router();

router.post('/users/register', addUser);
router.post('/users/login', loginUser);

export default router;

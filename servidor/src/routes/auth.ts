import {Router} from 'express';
const router: Router = Router();

import {login, logout, account} from '../controllers/auth.controller'

router.post('/login', login);

router.post('/logout', logout);

router.get('/account', account);

export default router
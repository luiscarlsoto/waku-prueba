import {Router} from 'express';
const router: Router = Router();

import {list, deals} from '../controllers/games.controller'

router.get('/list', list);

router.get('/deals', deals);


export default router
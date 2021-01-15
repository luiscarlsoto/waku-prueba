import {Router} from 'express';
import {authenticate} from 'passport'

const router: Router = Router();

import {list, deals} from '../controllers/games.controller'

router.get('/list', authenticate('jwt'),async(req, res)=>{
    const data =  await list();
    //console.log(data)
    res.json({status: 200, data})
    });
router.get('/deals', authenticate('jwt'),async(req, res)=>{
    const data =  await deals();
    //console.log(data)
    res.json({status: 200, data})
    });


export default router
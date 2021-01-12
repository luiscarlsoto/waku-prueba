import {Router} from 'express';
const router: Router = Router();

import {list, deals} from '../controllers/games.controller'

router.get('/list', async(req, res)=>{
    const data =  await list();
    //console.log(data)
    res.json({status: 200, data})
    });
router.get('/deals', async(req, res)=>{
    const data =  await deals();
    //console.log(data)
    res.json({status: 200, data})
    });


export default router
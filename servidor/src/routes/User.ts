import {Router} from 'express';
import {authenticate} from 'passport'
const router: Router = Router();

import {getUser} from '../controllers/user.controller'

router.get('/data',authenticate('jwt'), async(req : any, res)=>{
    const data =  await getUser(req.user);
    console.log('from routes: ',data)
    res.json({status: 200, data})
    });



export default router
import {Router} from 'express';
import passport from 'passport';
import {createJWTToken} from '../utils/jwtUtils'
const router: Router = Router();


router.get('/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  }));
  
  router.get('/facebook/callback',
    passport.authenticate('facebook', { session: false}),(req : any, res) => {
       const token =  createJWTToken({uid: req.user.uid})
      res.redirect(`${process.env.CLIENT_URL}/auth?token=${token}`)
    });
  
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  

export default router
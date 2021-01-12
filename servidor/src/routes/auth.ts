import {Router} from 'express';
import passport from 'passport';
import {createJWTToken} from '../utils/jwtUtils'
const router: Router = Router();

// import {login, logout, callback} from '../controllers/auth.controller'
 const generateUserToken = (req: any, res: any) => {
    const accessToken = createJWTToken({uid: req.user.uid});
    //console.log(accessToken)
    res.send('JWT '+accessToken)
    res.header('auth-token', accessToken).json({
        error: null,
        data: {accessToken}
    })
}

router.get('/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  }));
  
  router.get('/facebook/callback',
    passport.authenticate('facebook', { session: false}),generateUserToken);
  
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  

export default router
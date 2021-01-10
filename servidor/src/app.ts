import express, { Application } from 'express';
import passport from 'passport';
import session from 'express-session'
import authRoutes from "./routes/auth";
import gamesRoutes from "./routes/games";
import  "./config/passport";

//Connect to MongoDB
import "./database"

//Settings 
const app: Application = express();
app.set('port', 3000)
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret:process.env.SESSION_SECRET as string,
    resave: true,
    saveUninitialized: true,
}))


//routes
app.use('/games',gamesRoutes)

// facbook auth

app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}))
app.get("/auth/facebook/callback", passport.authenticate("facebook", {
    successRedirect:'/games',
    failureRedirect:'/failed'
}))
app.get('/failed',(req, res: any) => {
    res.sed('no valid user')
})
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user: any, done) {
    done(null, user);
  });
export default app;
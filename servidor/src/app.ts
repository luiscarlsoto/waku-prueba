import express, { Application } from 'express';
import passport from 'passport';
import session from 'express-session'
import authRoutes from "./routes/auth";
import gamesRoutes from "./routes/games";
import  "./config/passport";
import "./database"
import cors from "cors";



//Settings 
export const createApp = () => {
  const app: express.Application = express();


  //use cors middleware
  app.use(cors());

  app.set('port', 4000)
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: true,
    saveUninitialized: true,
  }))


  //routes
  app.use('/games', gamesRoutes)
  app.use('/auth', authRoutes)
  // facbook auth


  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user: any, done) => {
    done(null, user);
  });
  return app
}

export default createApp;
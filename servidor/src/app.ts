import express, { Application } from 'express';
import passport from 'passport';
import session from 'express-session'
import authRoutes from "./routes/auth";
import gamesRoutes from "./routes/games";
import UserRoutes from "./routes/User";
import {JWTStrategy} from './config/passport'
import  "./config/passport";
import "./database"
import cors from "cors";



//Settings 
export const createApp = () => {
  const app: express.Application = express();

  const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
  };
   
  //use cors middleware
  app.use(cors());
  passport.use('jwt', JWTStrategy)
  app.set('port', process.env.PORT || 4000)
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
  app.use('/user', UserRoutes)

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
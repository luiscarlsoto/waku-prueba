import express, { Application } from 'express';
const app: Application = express();
import authRoutes from "./routes/auth";
//Settings 
app.set('port', 3000)

//routes
app.use('/api/auth',authRoutes)
app.use('/api/games',authRoutes)

export default app;
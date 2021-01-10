import mongoose from "mongoose";


const mongoUrl: string = `${process.env.MONGODB_URI}`
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { console.log(`Conectado a la base de datos`) },
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});

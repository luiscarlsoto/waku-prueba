import mongoose from "mongoose";


mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false } ).then(
    () => { console.log(`Conectado a la base de datos`) },
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});

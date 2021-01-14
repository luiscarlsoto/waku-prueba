import mongoose from "mongoose";


// const mongoUrl: string = `mongodb+srv://waku:Y5Z3upddy87qCfCB@cluster0.pqpy0.mongodb.net/games?retryWrites=true&w=majority`
mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false } ).then(
    () => { console.log(`Conectado a la base de datos`) },
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});

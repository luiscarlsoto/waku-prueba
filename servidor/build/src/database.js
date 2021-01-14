"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const mongoUrl: string = `mongodb+srv://waku:Y5Z3upddy87qCfCB@cluster0.pqpy0.mongodb.net/games?retryWrites=true&w=majority`
mongoose_1.default.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { console.log(`Conectado a la base de datos`); }).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});

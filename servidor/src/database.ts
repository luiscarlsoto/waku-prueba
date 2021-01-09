//conexión a Base de datos
import mongoose from 'mongoose'
const DB_USER = "waku"
const DB_PASSWORD = "3puq6U0tr6sqmn2J"
const DB_NAME = "games"
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.pqpy0.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
console.log(uri)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Base de datos iniciada'))
    .catch(e => console.log(e))
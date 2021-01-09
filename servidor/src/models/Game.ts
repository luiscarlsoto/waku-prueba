import {Schema, model} from 'mongoose';

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imageURL:{
        type: String,
        required: true,
    },
    steamID:{
        type: Number,
        required: true,
    },
    cheapest:{
        type: Number,
        require: true,
    }
})

export default model('Game', gameSchema);
import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    id:{
        type: Number,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

export default model('User', userSchema);
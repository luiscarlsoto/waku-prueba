import mongoose from 'mongoose';

export type GameInterface = mongoose.Document &{
    steamAppID: string;
    title: string;
    price: number;
    image: string;
    url: string;
}

const gameSchema = new mongoose.Schema({
    steamAppID: {type: String, required: true},
    external:  {type: String, required: true},
    cheapest:  {type: Number, required: true},
    thumb:  {type: String, required: true},
})

export const Game = mongoose.model<GameInterface>("games", gameSchema);

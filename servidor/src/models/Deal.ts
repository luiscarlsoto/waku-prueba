import mongoose from 'mongoose';

export type DealInterface = mongoose.Document &{
    steamAppID: string;
    title: string;
    salePrice: number;
    normalPrice: number;
    savings : number;
    releaseDate : number;
    image: number;

}

const dealSchema = new mongoose.Schema({
    steamAppID: {type:String, required: true},
    title: {type:String, required: true},
    salePrice: {type:Number, required: true},
    normalPrice: {type:Number, required: true},
    savings: {type:Number, required: true},
    releaseDate: {type:Number, required: true},
    image: {type:String, required: true},
})

export const Deal = mongoose.model<DealInterface>("deals", dealSchema);

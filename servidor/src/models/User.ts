import mongoose from 'mongoose';

export type UserInterface = mongoose.Document &{
    uid: string;
    displayName: string;
    pic: string;
    photos: string;
}

const userSchema = new mongoose.Schema({
    uid: {type:String, required: true},
    displayName: {type:String, required: true},
    photos:{type:String, required: true},
    
})

export const User = mongoose.model<UserInterface>("users", userSchema);

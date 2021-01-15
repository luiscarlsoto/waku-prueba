import {User} from '../models/User'

export const getUser =  async(uid : string) => {
    console.log('from getUser',uid)
    const res = await User.find({uid})
    console.log('from controller :',res)
    return  res
};
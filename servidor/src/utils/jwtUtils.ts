import jwt from 'jsonwebtoken'
const secret : string = process.env.JWT_SECRET as string;

export const createJWTToken = (payload: any) =>{
    const token = jwt.sign(payload, secret)
    return token
}
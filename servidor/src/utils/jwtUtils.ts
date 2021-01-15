import jwt from 'jsonwebtoken'

export const createJWTToken = (payload: any) =>{
    const token = jwt.sign(payload, `${process.env.JWT_SECRET}`|| "my-32-character-ultra-secure-and-ultra-long-secret")
    return token
}

export const decodeJWT = (token: string) =>{
    const decode = jwt.decode(token)
    return decode
}
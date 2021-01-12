import {Request, Response} from 'express';
import * as jwt from "jwt-simple";

const secret = process.env.JWT_SECRET as string;
export const createJWTToken = (payload: any) => {
    return jwt.encode(payload, secret, 'HS256');
};


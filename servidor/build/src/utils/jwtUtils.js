"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJWT = exports.createJWTToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWTToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, `${process.env.JWT_SECRET}` || "my-32-character-ultra-secure-and-ultra-long-secret");
    return token;
};
exports.createJWTToken = createJWTToken;
const decodeJWT = (token) => {
    const decode = jsonwebtoken_1.default.decode(token);
    return decode;
};
exports.decodeJWT = decodeJWT;

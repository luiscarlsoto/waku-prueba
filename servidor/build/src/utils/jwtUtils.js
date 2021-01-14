"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const createJWTToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, secret);
    return token;
};
exports.createJWTToken = createJWTToken;

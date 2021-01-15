"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    uid: { type: String, required: true },
    displayName: { type: String, required: true },
    photos: { type: String, required: true },
});
exports.User = mongoose_1.default.model("users", userSchema);

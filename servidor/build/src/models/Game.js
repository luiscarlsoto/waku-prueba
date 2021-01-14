"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const gameSchema = new mongoose_1.default.Schema({
    steamAppID: { type: String, required: true },
    external: { type: String, required: true },
    cheapest: { type: Number, required: true },
    thumb: { type: String, required: true },
});
exports.Game = mongoose_1.default.model("games", gameSchema);

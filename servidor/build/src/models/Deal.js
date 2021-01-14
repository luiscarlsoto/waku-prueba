"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deal = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dealSchema = new mongoose_1.default.Schema({
    steamAppID: { type: String, required: true },
    title: { type: String, required: true },
    salePrice: { type: Number, required: true },
    normalPrice: { type: Number, required: true },
    savings: { type: Number, required: true },
    releaseDate: { type: Number, required: true },
    image: { type: String, required: true },
});
exports.Deal = mongoose_1.default.model("deals", dealSchema);

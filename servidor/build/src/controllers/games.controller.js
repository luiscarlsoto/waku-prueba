"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDB = exports.deals = exports.list = void 0;
const axios_1 = __importDefault(require("axios"));
const Game_1 = require("../models/Game");
const Deal_1 = require("../models/Deal");
const list = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Game_1.Game.find({});
    return res;
});
exports.list = list;
const deals = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Deal_1.Deal.find({});
    return res;
});
exports.deals = deals;
const loadDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield axios_1.default.get(`${process.env.API_URL_GAMES}`);
    const deals = yield axios_1.default.get(`${process.env.API_URL_DEALS}`);
    for (const value of games.data.filter(e => e.steamAppID !== null)) {
        Game_1.Game.findOneAndUpdate({
            steamAppID: value.steamAppID
        }, value, {
            upsert: true,
            setDefaultsOnInsert: true,
        }, (err) => {
            err !== null && console.log(err);
        });
    }
    for (const value of deals.data.filter(e => e.steamAppID !== null)) {
        //  console.log(value)
        Deal_1.Deal.findOneAndUpdate({
            steamAppID: value.steamAppID
        }, value, {
            upsert: true,
            setDefaultsOnInsert: true,
        }, (err, doc) => {
            //console.log(doc)
            err !== null && console.log(err);
        });
    }
});
exports.loadDB = loadDB;

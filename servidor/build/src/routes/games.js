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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = require("passport");
const router = express_1.Router();
const games_controller_1 = require("../controllers/games.controller");
router.get('/list', passport_1.authenticate('jwt'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield games_controller_1.list();
    //console.log(data)
    res.json({ status: 200, data });
}));
router.get('/deals', passport_1.authenticate('jwt'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield games_controller_1.deals();
    //console.log(data)
    res.json({ status: 200, data });
}));
exports.default = router;

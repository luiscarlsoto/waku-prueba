"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const games_controller_1 = require("./controllers/games.controller");
const app_1 = __importDefault(require("./app"));
const app = app_1.default();
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    games_controller_1.loadDB();
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const auth_1 = __importDefault(require("./routes/auth"));
const games_1 = __importDefault(require("./routes/games"));
const User_1 = __importDefault(require("./routes/User"));
const passport_2 = require("./config/passport");
require("./config/passport");
require("./database");
const cors_1 = __importDefault(require("cors"));
//Settings 
const createApp = () => {
    const app = express_1.default();
    const options = {
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'X-Access-Token',
        ],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        origin: '*',
        preflightContinue: false,
    };
    //use cors middleware
    app.use(cors_1.default());
    passport_1.default.use('jwt', passport_2.JWTStrategy);
    app.set('port', process.env.PORT || 4000);
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    app.use(express_session_1.default({
        secret: `${process.env.SESSION_SECRET}`,
        resave: true,
        saveUninitialized: true,
    }));
    //routes
    app.use('/games', games_1.default);
    app.use('/auth', auth_1.default);
    app.use('/user', User_1.default);
    // facbook auth
    passport_1.default.serializeUser((user, done) => {
        done(null, user);
    });
    passport_1.default.deserializeUser((user, done) => {
        done(null, user);
    });
    return app;
};
exports.createApp = createApp;
exports.default = exports.createApp;

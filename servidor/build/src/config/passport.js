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
exports.JWTStrategy = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_facebook_1 = __importDefault(require("passport-facebook"));
const User_1 = require("../models/User");
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
const optJWT = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'my-32-character-ultra-secure-and-ultra-long-secret'
};
exports.JWTStrategy = new passport_jwt_1.default.Strategy(optJWT, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    return done(null, payload.uid);
}));
const FacebookStrategy = passport_facebook_1.default.Strategy;
passport_1.default.use(new FacebookStrategy({
    clientID: `${process.env.FACEBOOK_ID}`,
    clientSecret: `${process.env.FACEBOOK_SECRET}`,
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "displayName", "picture.Type(small)", "email"],
}, (token, refreshToken, profile, done) => {
    console.log(profile);
    process.nextTick(() => {
        User_1.User.findOne({ 'uid': profile.id }, (err, user) => {
            if (err)
                return done(err);
            if (user) {
                return done(null, user);
            }
            else {
                var newUser = new User_1.User();
                newUser.uid = profile.id;
                newUser.displayName = profile.displayName;
                newUser.photos = profile.photos[0]['value'];
                newUser.save((err) => {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
}));

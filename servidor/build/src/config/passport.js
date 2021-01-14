"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_facebook_1 = __importDefault(require("passport-facebook"));
const User_1 = require("../models/User");
const FacebookStrategy = passport_facebook_1.default.Strategy;
passport_1.default.use(new FacebookStrategy({
    clientID: `${process.env.FACEBOOK_ID}`,
    clientSecret: `${process.env.FACEBOOK_SECRET}`,
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "displayName", "picture.Type(small)", "email"],
}, (token, refreshToken, profile, done) => {
    process.nextTick(() => {
        User_1.User.findOne({ 'uid': profile.id }, (err, user) => {
            if (err)
                return done(err);
            if (user) {
                console.log(user, "user found");
                return done(null, user);
            }
            else {
                var newUser = new User_1.User();
                newUser.uid = profile.id;
                newUser.displayName = profile.displayName;
                newUser.pic = `https://graph.facebook.com/${profile.id}/picture?type=large`;
                newUser.save((err) => {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
}));

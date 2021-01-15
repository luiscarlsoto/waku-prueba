"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const jwtUtils_1 = require("../utils/jwtUtils");
const router = express_1.Router();
router.get('/facebook', passport_1.default.authenticate('facebook', {
    scope: ['public_profile', 'email']
}));
router.get('/facebook/callback', passport_1.default.authenticate('facebook', { session: false }), (req, res) => {
    const token = jwtUtils_1.createJWTToken({ uid: req.user.uid });
    res.redirect(`${process.env.CLIENT_URL}/auth?token=${token}`);
});
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
exports.default = router;

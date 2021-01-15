import passport from "passport";
import passportFacebook from "passport-facebook";
import  {User, UserInterface}  from "../models/User";
import passportJWT from "passport-jwt";

const ExtractJWT = passportJWT.ExtractJwt;

const optJWT = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'my-32-character-ultra-secure-and-ultra-long-secret'
}

export const JWTStrategy = new passportJWT.Strategy(optJWT, async (payload, done) =>{
    console.log(payload)
    return done(null, payload.uid)
})


const FacebookStrategy: any = passportFacebook.Strategy;
passport.use(new FacebookStrategy({
    clientID: `${process.env.FACEBOOK_ID}`,
    clientSecret: `${process.env.FACEBOOK_SECRET}`,
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "displayName", "picture.Type(small)", "email"],
}, (token: string, refreshToken: string, profile: UserInterface, done: any) => {
    console.log(profile)
    process.nextTick(() => {
        User.findOne({'uid': profile.id}, 
        (err: any, user: any) => {
            if (err)
                return done(err);
            if (user) {
                return done(null, user); 
            } else {
                var newUser = new User();
                newUser.uid = profile.id;                   
                newUser.displayName = profile.displayName;
                newUser.photos = profile.photos[0]['value' as any];
                newUser.save((err) => {
                    if (err)
                        throw err;
                    return done(null, newUser);
                    
                });
            }

        });

    })

}));

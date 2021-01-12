import passport from "passport";
import passportFacebook from "passport-facebook";
import  {User, UserInterface}  from "../models/User";

const FacebookStrategy: any = passportFacebook.Strategy;


passport.use(new FacebookStrategy({
    clientID: "706006633451783",
    clientSecret: "855b614c6fbdd20614b48c0b1bc576cd",
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "displayName", "picture.Type(small)", "email"],
}, (token: string, refreshToken: string, profile: UserInterface, done: any) => {
    process.nextTick(() => {
        User.findOne({'uid': profile.id}, 
        (err: any, user: any) => {
            if (err)
                return done(err);
            if (user) {
                console.log(user,"user found")
                return done(null, user); 
            } else {
                var newUser = new User();
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

    })

}));

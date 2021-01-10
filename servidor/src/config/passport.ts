import passport from "passport";
import passportFacebook from "passport-facebook";

import  {User, UserInterface}  from "../models/User";

const FacebookStrategy:any  = passportFacebook.Strategy;


passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "displayName", "picture.Type(small)", "email"],
}, (token: string, refreshToken: string, profile: UserInterface, done: any) => {
    process.nextTick(() => {

        console.log(profile)
        // find the user in the database based on their facebook id
        User.findOne({ 'uid' : profile.id }, (err: any, user: any) => {

            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
                return done(err);

            // if the user is found, then log them in
            if (user) {
                console.log("user found")
                console.log(user)
                return done(null, user); // user found, return that user
            } else {
                // if there is no user found with that facebook id, create them
                var newUser= new User();

                // set all of the facebook information in our user model
                newUser.uid = profile.id; // set the users facebook id                   
                newUser.token = token; // we will save the token that facebook provides to the user                    
                newUser.displayName = profile.displayName;
                newUser.pic = `https://graph.facebook.com/${profile.id}/picture?type=large`;
                // save our user to the database
                newUser.save(function(err) {
                    if (err)
                        throw err;

                    // if successful, return the new user
                    return done(null, newUser);
                });
            }

        });

    })

}));


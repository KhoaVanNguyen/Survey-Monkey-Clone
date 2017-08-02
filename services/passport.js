const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          console.log("this user was created already!");
          console.log(existingUser)
          done(null,existingUser)
        } else {
          new User({
            googleId: profile.id,
            displayName: profile.displayName
          }).save().then( user => done(null,user)  );
        }
      });
    }
  )
);

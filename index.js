const express = require('express')
const app = express() // it's just a function
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')


passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log('accessToken \n' + accessToken)
    console.log('refreshToken \n' + accessToken)
    console.log('profile \n' + JSON.stringify(profile,null,2))
    console.log(cb)
  }
));

app.get('/', (req,res) => {
    res.send({ hi: 'There' })
})
// auth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

  // get user profile 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('req + \n' + req)
    res.redirect('/');
});



const PORT = process.env.PORT || 3000

app.listen(PORT)
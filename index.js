const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express(); // it's just a function
const cookieSession = require("cookie-session");
const passport = require("passport");
mongoose.connect(keys.mongoURI);
app.use(
  cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 30,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./models/User");
require("./services/passport");

const authRoute = require("./routes/auth");

authRoute(app);
app.get('/', (req,res) => {
  res.send('Homepage')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express(); // it's just a function
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json())
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
const paymentRoute = require('./routes/payment')
authRoute(app);
paymentRoute(app);
app.get('/', (req,res) => {
  res.send('Homepage')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);

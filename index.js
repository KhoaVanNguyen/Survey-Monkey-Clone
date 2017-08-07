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
require('./models/Survey')
require("./services/passport");

const authRoute = require("./routes/auth");
const paymentRoute = require('./routes/payment')
const surveyRoute = require('./routes/surveys')
authRoute(app);
paymentRoute(app);
surveyRoute(app)
// app.get('/', (req,res) => {
//   res.send('Homepage')
// })

if  ( process.env.NODE_ENV === 'production' )  {

  app.use( express.static('client/build')  )

  const path = require('path')
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html') )
  })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);

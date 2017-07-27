const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')


const app = express() // it's just a function

mongoose.connect(keys.mongoURI)

require('./services/passport')
const authRoute = require('./routes/auth')




// auth
authRoute(app);




const PORT = process.env.PORT || 3000

app.listen(PORT)
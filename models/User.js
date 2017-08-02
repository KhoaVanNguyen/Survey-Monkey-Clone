const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    googleId: String,
    displayName: String 
})

mongoose.model('user',UserSchema)
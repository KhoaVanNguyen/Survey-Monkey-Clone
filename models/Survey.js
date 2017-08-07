const mongoose = require('mongoose')
const Schema = mongoose.Schema


const RecipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
})


const SurveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'user'  },
  dateSent: Date,
  lastResponse: Date
});

mongoose.model('survey',SurveySchema)
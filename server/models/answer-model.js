const mongoose = require('mongoose')

//----------------------------------------------------------
const schema = new mongoose.Schema({
  jawaban:'string',
  iduser:[{type:mongoose.Schema.Types.ObjectId, ref: 'users'}],
  idquestion:[{type:mongoose.Schema.Types.ObjectId, ref: 'questions'}]
})

const answers = mongoose.model('answers', schema)
//----------------------------------------------------------
module.exports = answers

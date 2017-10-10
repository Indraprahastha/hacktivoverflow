const mongoose = require('mongoose')

//----------------------------------------------------------
const schema = new mongoose.Schema({
  judul:'string',
  pertanyaan:'string',
  idgrup:[{type:mongoose.Schema.Types.ObjectId, ref: 'grups'}],
  iduser:[{type:mongoose.Schema.Types.ObjectId, ref: 'users'}]
})

const questions = mongoose.model('questions', schema)
//----------------------------------------------------------
module.exports = questions

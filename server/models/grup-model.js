const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hacktivoverflow')
//----------------------------------------------------------
const schema = new mongoose.Schema({
  nama:'string'
})

const grups = mongoose.model('grups', schema)
//----------------------------------------------------------
module.exports = grups

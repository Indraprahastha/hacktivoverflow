const mongoose = require('mongoose')

//----------------------------------------------------------
const schema = new mongoose.Schema({
  nama:'string'
})

const grups = mongoose.model('grups', schema)
//----------------------------------------------------------
module.exports = grups

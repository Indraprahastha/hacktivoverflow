const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hacktivoverflow')
//----------------------------------------------------------
const schema = new mongoose.Schema({
  username:'string',
  password:'string',
  email:'string'
})

const users = mongoose.model('users', schema)
//----------------------------------------------------------
module.exports = users

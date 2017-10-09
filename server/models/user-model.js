mongodb:Indraprahastha:Pancasila85@@cluster0-shard-00-00-ubshk.mongodb.net:27017,cluster0-shard-00-01-ubshk.mongodb.net:27017,cluster0-shard-00-02-ubshk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/hacktivoverflow')
//----------------------------------------------------------
const schema = new mongoose.Schema({
  username:'string',
  password:'string',
  email:'string'
})

const users = mongoose.model('users', schema)
//----------------------------------------------------------
module.exports = users

mongodb:Indraprahastha:Pancasila85@@cluster0-shard-00-00-ubshk.mongodb.net:27017,cluster0-shard-00-01-ubshk.mongodb.net:27017,cluster0-shard-00-02-ubshk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/hacktivoverflow')
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

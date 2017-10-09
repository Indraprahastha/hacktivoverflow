const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
//----------------------------------------------------------
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
//----------------------------------------------------------
let user = require('./routers/user-router.js')
let question = require('./routers/question-router.js')
let answer = require('./routers/answer-router.js')
let grup = require('./routers/grup-router.js')
//----------------------------------------------------------
app.use('/user',user)
app.use('/question',question)
app.use('/answer',answer)
app.use('/grup',grup)

app.listen(3000,function(){
  console.log('Hacktivoverflow Jalan');
})

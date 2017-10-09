let answer = require('../models/answer-model')
var mongoose = require('mongoose');
//--------------------------------------------------create question(v)
const addAnswer = (req,res) => {
  answer.create({
    jawaban:req.body.jawaban,
    iduser:req.body.iduser,
    idquestion:req.body.idquestion
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//-----------------------------------------get question(v)
const getAnswer = (req,res) => {
  answer.find().populate('iduser','username').populate('idquestion','judul').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------get data question(v)
const findAnswer = (req,res) => {
  answer.findById({
    _id:req.params.id
  }).populate('iduser','username').populate('idquestion','judul').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//-------------------------------------- edit question(v)
const editAnswer = (req,res) => {
  answer.update({
    _id:req.params.id
  },{
    jawaban:req.body.jawaban,
    iduser:req.body.iduser,
    idquestion:req.body.idquestion
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//--------------------------------------delet question(v)
const deleteAnswer = (req,res) => {
  answer.remove({
    _id:req.params.id
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------------------------
module.exports = {
  addAnswer,
  getAnswer,
  findAnswer,
  editAnswer,
  deleteAnswer
}

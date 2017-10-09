let question = require('../models/question-model')
var mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// require('dotenv').config()
//--------------------------------------------------create question(v)
const addQuestion = (req,res) => {
  question.create({
    judul:req.body.judul,
    pertanyaan:req.body.pertanyaan,
    idgrup:req.body.idgrup,
    iduser:req.body.iduser
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//-----------------------------------------get question(v)
const getQuestion = (req,res) => {
  question.find().populate('idgrup','nama').populate('iduser','username').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------get data question(v)
const findQuestion = (req,res) => {
  question.findById({
    _id:req.params.id
  }).populate('idgrup','nama').populate('iduser','username').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//-------------------------------------- edit question(v)
const editQuestion = (req,res) => {
  question.update({
    _id:req.params.id
  },{
    judul:req.body.judul,
    pertanyaan:req.body.pertanyaan,
    idgrup:req.body.idgrup,
    iduser:req.body.iduser
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//--------------------------------------delet question(v)
const deleteQuestion = (req,res) => {
  question.remove({
    _id:req.params.id
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------------------------
module.exports = {
  addQuestion,
  getQuestion,
  findQuestion,
  editQuestion,
  deleteQuestion,
}

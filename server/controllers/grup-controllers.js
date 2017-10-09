let grup = require('../models/grup-model')
var mongoose = require('mongoose');
//--------------------------------------------------create question(v)
const addGrup = (req,res) => {
  grup.create({
    nama:req.body.nama
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//-----------------------------------------get question(v)
const getGrup = (req,res) => {
  grup.find()
  .then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------get data question(v)
const findGrup = (req,res) => {
  grup.findById({
    _id:req.params.id
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//-------------------------------------- edit question(v)
const editGrup = (req,res) => {
  grup.update({
    _id:req.params.id
  },{
    nama:req.body.nama
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//--------------------------------------delet question(v)
const deleteGrup = (req,res) => {
  grup.remove({
    _id:req.params.id
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------------------------
module.exports = {
  addGrup,
  getGrup,
  findGrup,
  editGrup,
  deleteGrup
}

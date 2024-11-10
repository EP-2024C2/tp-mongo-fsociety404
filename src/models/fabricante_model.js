'use strict';
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const fabricante = new Schema({
    nombre:{type:String, required: true},
    direccion:{type:String, required: true},
    nroContacto:{type:String, required: true},
    pathImgPerfil:{type:String}
})

module.exports = model('Fabricante', fabricante)
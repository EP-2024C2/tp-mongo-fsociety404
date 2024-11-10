'use strict';
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const producto = new Schema({
    nombre:{type:String, required: true},
    descripcion:{type:String},
    precio:{type:Number, required:true},
    pathImg:{type:String}
})

module.exports = model('Producto', producto)


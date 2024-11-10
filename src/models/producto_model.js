'use strict';
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const producto = new Schema({
    nombre:{type:String, required: true},
    descripcion:{type:String},
    precio:{type:Number, required:true},
    pathImg:{type:String},
    fabricantes: [{ type: Schema.Types.ObjectId, ref: 'Fabricantes', required: true }],
    componentes: [{ type: Schema.Types.ObjectId, ref: 'Componentes', required: true }],
})

module.exports = model('Producto', producto)


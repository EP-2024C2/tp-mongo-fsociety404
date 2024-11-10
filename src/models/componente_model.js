'use strict';
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const componente = new Schema({
    nombre:{type: String, required: true},
    descripcion:{type: String},
    productos: [{ type: Schema.Types.ObjectId, ref: 'Productos', required: true }],
})


module.exports = model('Componente', componente)
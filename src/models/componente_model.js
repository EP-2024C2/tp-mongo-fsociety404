'use strict';
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const componente = new Schema({
    nombre:{type: String, required: true},
    descripcion:{type: String}
})


module.exports = model('Componente', componente)
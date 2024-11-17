'use strict';
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const componenteSchema = new Schema({
    nombre:{type: String, required: true},
    descripcion:{type: String},
    productos: [{ type: Schema.Types.ObjectId, ref: 'Producto', required: true }],
})

componenteSchema.set("toJSON",{
    transform: ( __v, ret) =>{
        delete ret.__v} })

module.exports = model('Componentes', componenteSchema)
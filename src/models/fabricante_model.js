'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const fabricanteSchema = new Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    nroContacto: { type: String, required: true },
    pathImgPerfil: { type: String },
    productos: [{ type: Schema.Types.ObjectId, ref: 'Producto', required: true }]
})

fabricanteSchema.set("toJSON", {
    transform: (__v, ret) => {
        delete ret.__v
    }
})

module.exports = model('Fabricantes', fabricanteSchema)
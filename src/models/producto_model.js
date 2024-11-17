'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const componenteSchema = require('./componente_model');


const productoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    pathImg: { type: String },
    fabricantes: [{ type: Schema.Types.ObjectId, ref: 'Fabricantes', required: true }],
    componentes: [componenteSchema]
})

productoSchema.set("toJSON", {
    transform: (__v, ret) => {
        delete ret.__v
    }
})

module.exports = model('Producto', productoSchema)


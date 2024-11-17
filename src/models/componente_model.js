'use strict';
const mongoose = require('mongoose');
const {Schema} = mongoose;

const componenteSchema = new Schema({
    nombre:{type: String, required: true},
    descripcion:{type: String},
},{ _id: true })

componenteSchema.set("toJSON",{
    transform: ( __v, ret) =>{
        delete ret.__v} })

module.exports = componenteSchema

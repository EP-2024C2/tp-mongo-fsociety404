const dotenv = require('dotenv');
dotenv.config();
const process = require('process')

const express = require('express')
const rutas = require('./routes')
const mongodb = require('./db/server')


const app = express()
app.use(express.json())
app.use('/', rutas)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Iniciando servicio en puerto ${PORT}`)

})

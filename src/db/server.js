const mongoose = require('mongoose')

const MONGO_URL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?authSource=admin`
console.log(MONGO_URL)

//TODO: agregar la parte error de docker- que si falla no deje continuar

async function connectToDatabase() {
    console.log('Conectando a mongo');
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Conexión a mongo con éxito');
    } catch (err) {
        console.error('Error al conectarse a mongo', err);
    }
}

connectToDatabase();

module.exports = mongoose
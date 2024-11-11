const mongoose = require('mongoose')
const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_URL, MONGO_DB} = process.env

const MONGODB_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DB}?authSource=admin`
console.log(MONGODB_URI)

//TODO: agregar la parte error de docker- que si falla no deje continuar

async function connectToDatabase() {
    console.log('Conectando a mongo');
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Conexión a mongo con éxito');
    } catch (err) {
        console.error('Error al conectarse a mongo', err);
    }
}

connectToDatabase();

module.exports = mongoose
const mongoose = require('mongoose');

const connectMongoDB = (mongoURI, dbName) => {
    mongoose
    .connect(mongoURI, {dbName: dbName})
    .then(() => console.log("Connexion à Mongo réussie"))
    .catch(error => console.log(error))
}

module.exports = connectMongoDB;

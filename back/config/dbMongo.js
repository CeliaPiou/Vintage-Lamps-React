const mongoose = require('mongoose');

const connectMongoDB = (mongoURI, dbName) => {
    mongoose
    .connect(mongoURI, {dbName: dbName})
    .then(() => console.log("🎉 Connexion à Mongo réussie, hurray"))
    .catch(error => console.log(error))
}

module.exports = connectMongoDB;

const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
const ENV = require("./config/env")

dotenv.config();


// PORT
const PORT = ENV.PORT || 8080;

// LISTEN
app.listen(PORT, () => {
    console.log(`🎉 Le serveur back-end est lancé, yay ! http://localhost:${PORT}`)
})


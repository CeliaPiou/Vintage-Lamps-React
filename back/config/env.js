const dotenv = require('dotenv');
dotenv.config();

const ENV = {

    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    DB_NAME : process.env.DB_NAME,
    TOKEN : process.env.TOKEN,
    FRONT_URL : process.env.FRONT_URL,
    EMAIL_USER : process.env.EMAIL_USER,
    EMAIL_PASS : process.env.EMAIL_PASS
}

module.exports = ENV;
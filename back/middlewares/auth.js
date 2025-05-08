const jwt = require('jsonwebtoken');
const ENV = require('../config/env');
const createError = require('./error');

const verifieToken = (req, res, next) => {

    const token = req.cookies.access_token;

    if(!token) return next(createError(401, 'Access denied'));

    jwt.verify(token, ENV.TOKEN, (error, user) => {

        if(error) {

            return next(createError(403, 'Token non valide !', error.message));
        }

        req.user = user;

        next()
    })
}

module.exports = verifieToken;


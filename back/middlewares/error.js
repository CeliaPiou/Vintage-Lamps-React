const createError = (status, message, details = null) => {

    const error = new Error(message);
    error.status = status;
    error.details = details;

    return error;

};

module.exports = createError;
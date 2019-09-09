function errorHandler(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Ups! Jotain meni pahasti pieleen palvelimella."
        }
    });
};

module.exports = errorHandler;
const {constants} = require("../constants");
const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation error",
                message: err.message,
                stacktrack: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stacktrack: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Un authorized",
                message: err.message,
                stacktrack: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stacktrack: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server error",
                message: err.message,
                stacktrack: err.stack,
            });
            break;
        default:
            console.log("No error");
            break;

    }
}

module.exports = {errorHandler};
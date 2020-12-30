"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
const notFound = (req, res, next) => {
    const error = new Error(`NOT FOUND - ${req.originalUrl}`);
    res.status(404);
    console.error(` ! Error: `.inverse.red.bold + ` ${error.message}`);
    next(error);
};
exports.notFound = notFound;
const errorHandler = (err, _req, res, _next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    console.error(` ! Error: `.inverse.red.bold + ` ${err.message}`);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};
exports.errorHandler = errorHandler;

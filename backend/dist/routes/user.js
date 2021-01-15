"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_1 = require("../controllers/user");
exports.router = express_1.Router();
// @desc     Authenticate User and get Token
// @route    POST /api/users/login
// @access   Public
exports.router.get("/login", express_async_handler_1.default(user_1.postUser));

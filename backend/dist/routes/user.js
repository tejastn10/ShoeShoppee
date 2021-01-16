"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_1 = require("../controllers/user");
const auth_1 = require("../middleware/auth");
exports.router = express_1.Router();
// @desc     Authenticate User and get Token
// @route    POST /api/users/login
// @access   Public
exports.router.post("/login", express_async_handler_1.default(user_1.postUser));
// @desc     Get User Profile
// @route    GET /api/users/profile
// @access   Private
exports.router.get("/profile", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(user_1.getUserProfile));

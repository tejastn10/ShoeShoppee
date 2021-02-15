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
// @desc     Authenticate and Login User
// @route    POST /api/users/login
// @access   Public
exports.router.post("/login", express_async_handler_1.default(user_1.postAuthUser));
// @desc     Authenticate and Register a New User
// @route    POST /api/users
// @access   Public
exports.router.post("/", express_async_handler_1.default(user_1.postRegisterUser));
// @desc     Get User Profile
// @route    GET /api/users/profile
// @access   Private
exports.router.get("/profile", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(user_1.getUserProfile));
// @desc     Update User Profile
// @route    PUT /api/users/profile
// @access   Private
exports.router.put("/profile", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(user_1.putUpdateUser));
// @desc     Get All Users
// @route    GET /api/users
// @access   Private/Admin
exports.router.get("/", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(user_1.getUsers));
// @desc     Update User by id
// @route    PUT /api/users/:id
// @access   Private/Admin
exports.router.put("/:id", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(user_1.putUpdateUserById));
// @desc     Delete a User
// @route    DELETE /api/users/:id
// @access   Private/Admin
exports.router.delete("/:id", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(user_1.deleteUser));

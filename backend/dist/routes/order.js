"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const order_1 = require("../controllers/order");
const auth_1 = require("../middleware/auth");
exports.router = express_1.Router();
// @desc     Create a New Order
// @route    POST /api/orders
// @access   Private
exports.router.post("/", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(order_1.postNewOrder));

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
// @desc     Get all Orders of User
// @route    GET /api/orders/all
// @access   Private
exports.router.get("/all", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(order_1.getOrders));
// @desc     Get all Orders
// @route    GET /api/orders
// @access   Private/Admin
exports.router.get("/", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(order_1.getAllOrders));
// @desc     Get Order by Id
// @route    GET /api/orders/:id
// @access   Private
exports.router.get("/:id", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(order_1.getOrderById));
// @desc     Update order to be Delivered
// @route    GET /api/orders/:id/p&d
// @access   Private/Admin
exports.router.put("/:id/p&d", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(order_1.updateOrder));

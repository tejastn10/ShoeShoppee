"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const product_1 = require("../controllers/product");
const auth_1 = require("../middleware/auth");
exports.router = express_1.Router();
// @desc     Fetch all Products
// @route    GET /api/products
// @access   Public
exports.router.get("/", express_async_handler_1.default(product_1.getAllPoducts));
// @desc     Fetch a Product
// @route    GET /api/products/:id
// @access   Public
exports.router.get("/:id", express_async_handler_1.default(product_1.getProductById));
// @desc     Create a Product
// @route    POST /api/products
// @access   Private/Admin
exports.router.post("/", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(product_1.postProduct));
// @desc     Update a Product
// @route    POST /api/products/:id
// @access   Private/Admin
exports.router.put("/:id", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(product_1.putProduct));
// @desc     Delete a Product
// @route    DELETE /api/products/:id
// @access   Private/Admin
exports.router.delete("/:id", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(auth_1.admin), express_async_handler_1.default(product_1.deleteProduct));
// @desc     Add a Product Review
// @route    POST /api/products/:id/review
// @access   Private
exports.router.post("/:id/review", express_async_handler_1.default(auth_1.protect), express_async_handler_1.default(product_1.postReview));

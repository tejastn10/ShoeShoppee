"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const product_1 = require("../controllers/product");
exports.router = express_1.Router();
// @desc     Fetch all Products
// @route    GET /api/products
// @access   Public
exports.router.get("/", express_async_handler_1.default(product_1.getAllPoducts));
// @desc     Fetch a Product
// @route    GET /api/products/:id
// @access   Public
exports.router.get("/:id", express_async_handler_1.default(product_1.getProductById));

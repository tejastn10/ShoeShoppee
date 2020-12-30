"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllPoducts = void 0;
const Product_model_1 = require("./../models/Product.model");
const getAllPoducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product_model_1.Product.find({});
    res.json(products);
});
exports.getAllPoducts = getAllPoducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product_model_1.Product.findById(req.params.id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404);
        throw new Error("Product Not found");
    }
});
exports.getProductById = getProductById;

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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProductById = exports.getAllPoducts = void 0;
const models_1 = require("./../models");
const getAllPoducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield models_1.Product.find({});
    res.json(products);
});
exports.getAllPoducts = getAllPoducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.Product.findById(req.params.id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404);
        throw new Error("Product Not found");
    }
});
exports.getProductById = getProductById;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new models_1.Product({
        user: req.body.user._id,
        name: "sample",
        image: "/images/file.jpg",
        brand: "sample",
        category: "sample",
        type: "sample",
        description: "sample",
        reviews: [],
        price: 1000,
        count: 10,
    });
    const createdProduct = yield product.save();
    res.status(201).json(createdProduct);
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.Product.findById(req.params.id);
    const { count, price } = req.body;
    if (product) {
        product.count = count ? count : product.count;
        product.price = price ? price : product.price;
        yield product.save();
        res.json({ message: "Product Updated" });
    }
    else {
        res.status(404);
        throw new Error("Product Not found");
    }
});
exports.putProduct = putProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.Product.findById(req.params.id);
    if (product) {
        yield product.remove();
        res.json({ message: "Product deleted" });
    }
    else {
        res.status(404);
        throw new Error("Product Not found");
    }
});
exports.deleteProduct = deleteProduct;

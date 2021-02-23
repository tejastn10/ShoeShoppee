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
exports.deleteProduct = exports.postReview = exports.putProduct = exports.postProduct = exports.getProductById = exports.getAllPoducts = exports.searchProduct = void 0;
const models_1 = require("./../models");
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const keyword = req.query.keyword
        ? {
            name: {
                $regex: req.query.keyword,
                $options: "i",
            },
        }
        : {};
    const products = yield models_1.Product.find(Object.assign({}, keyword));
    if (products.length === 0) {
        res.status(404);
        throw new Error("❌ Searched Products not found");
    }
    else {
        res.json(products);
    }
});
exports.searchProduct = searchProduct;
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
        throw new Error("❌ Product Not found");
    }
});
exports.getProductById = getProductById;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, name, image, brand, category, type, description, price, count, } = req.body;
    const product = new models_1.Product({
        user: user._id,
        name,
        image: "/images/file.jpg",
        brand,
        category,
        type,
        description,
        reviews: [],
        price,
        count,
    });
    yield product.save();
    res.status(201).json({ message: "Product Created" });
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.Product.findById(req.params.id);
    const { count, price } = req.body;
    if (product) {
        product.count = count ? count : product.count;
        product.price = price ? price : product.price;
        yield product.save();
        res.json({ message: "✅ Product Updated" });
    }
    else {
        res.status(404);
        throw new Error("❌ Product Not found");
    }
});
exports.putProduct = putProduct;
const postReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.Product.findById(req.params.id);
    const { rating, comment } = req.body;
    if (product) {
        const reviewed = product.reviews.find((r) => r.user.toString() === req.body.user._id.toString());
        if (reviewed) {
            res.status(400);
            throw new Error("❗ Product already reviewed");
        }
        const review = {
            user: req.body.user._id,
            name: req.body.user.name,
            rating: Number(rating),
            comment,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
            product.reviews.reduce((acc, r) => r.rating + acc, 0) /
                product.reviews.length;
        yield product.save();
        res.status(201).json({ message: "✅ Review added" });
    }
    else {
        res.status(404);
        throw new Error("❌ Product Not found");
    }
});
exports.postReview = postReview;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.Product.findById(req.params.id);
    if (product) {
        yield product.remove();
        res.json({ message: "🗑 Product deleted" });
    }
    else {
        res.status(404);
        throw new Error("❌ Product Not found");
    }
});
exports.deleteProduct = deleteProduct;

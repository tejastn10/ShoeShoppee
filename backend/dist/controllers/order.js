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
exports.updateOrder = exports.getOrderById = exports.getAllOrders = exports.getOrders = exports.postNewOrder = void 0;
const models_1 = require("./../models");
const postNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderItems, totalItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, } = yield req.body;
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("❌ No Items in the Order");
    }
    else {
        const order = new models_1.Order({
            user: req.body.user._id,
            orderItems,
            totalItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
        const createdOrder = yield order.save();
        res.status(201).json(createdOrder);
    }
});
exports.postNewOrder = postNewOrder;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield models_1.Order.find({ user: req.body.user._id });
    res.json(orders);
});
exports.getOrders = getOrders;
const getAllOrders = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield models_1.Order.find({}).populate("user", "id name");
    res.json(orders);
});
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield models_1.Order.findById(req.params.id).populate("user", "name email");
    if (order) {
        res.json(order);
    }
    else {
        res.status(404);
        throw new Error("❌ Order Not Found");
    }
});
exports.getOrderById = getOrderById;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield models_1.Order.findById(req.params.id);
    if (order) {
        order.isDelivered = true;
        order.isPaid = true;
        order.deliveredOn = new Date();
        order.paidOn = new Date();
        yield order.save();
        res.json({ message: "✅ Product Delivered and Amount received" });
    }
    else {
        res.status(404);
        throw new Error("❌ Order Not Found");
    }
});
exports.updateOrder = updateOrder;

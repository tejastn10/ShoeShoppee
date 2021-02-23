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
exports.deleteUser = exports.putUpdateUserById = exports.getUsers = exports.postRegisterUser = exports.putUpdateUser = exports.getUserProfile = exports.postAuthUser = void 0;
const generateToken_1 = require("../utils/generateToken");
const models_1 = require("./../models");
const postAuthUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = yield req.body;
    const user = yield models_1.User.findOne({ email });
    if (user && (yield user.matchPassword(password))) {
        res.json({
            _id: user._id,
            isAdmin: user.isAdmin,
            token: generateToken_1.generateToken(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error("❗ Invalid Email or Password!");
    }
});
exports.postAuthUser = postAuthUser;
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findById(req.body.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }
    else {
        res.status(404);
        throw new Error("❌ User Not Found!");
    }
});
exports.getUserProfile = getUserProfile;
const putUpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findById(req.body.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = yield user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken_1.generateToken(updatedUser._id),
        });
    }
    else {
        res.status(404);
        throw new Error("❌ User Not Found!");
    }
});
exports.putUpdateUser = putUpdateUser;
const postRegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = yield req.body;
    const userExists = yield models_1.User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("❗ User Already Registered!");
    }
    const user = yield models_1.User.create({ name, email, password });
    if (user) {
        res.status(201).json({
            _id: user._id,
            isAdmin: user.isAdmin,
            token: generateToken_1.generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("❗ Invalid User data!");
    }
});
exports.postRegisterUser = postRegisterUser;
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield models_1.User.find({});
    res.json(users);
});
exports.getUsers = getUsers;
const putUpdateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findById(req.params.id);
    if (user) {
        user.isAdmin = req.body.isAdmin;
        yield user.save();
        res.json({ message: "✅ User Privileges updated" });
    }
    else {
        res.status(404);
        throw new Error("❌ User Not Found!");
    }
});
exports.putUpdateUserById = putUpdateUserById;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findById(req.params.id);
    if (user) {
        yield user.remove();
        res.json({ message: "🗑 User deleted!" });
    }
    else {
        res.status(404);
        throw new Error("❌ User Not found!");
    }
});
exports.deleteUser = deleteUser;

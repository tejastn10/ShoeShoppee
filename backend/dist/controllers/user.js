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
exports.postUser = void 0;
const generateToken_1 = require("../utils/generateToken");
const User_model_1 = require("./../models/User.model");
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = yield req.body;
    const user = yield User_model_1.User.findOne({ email });
    if (user && (yield user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken_1.generateToken(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error("Invalid Email or Password!");
    }
});
exports.postUser = postUser;
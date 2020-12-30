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
const dotenv_1 = require("dotenv");
require("colors");
const db_1 = require("./config/db");
const data_1 = require("./data");
const models_1 = require("./models");
dotenv_1.config();
db_1.connectDB();
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.User.deleteMany();
        yield models_1.Product.deleteMany();
        yield models_1.Order.deleteMany();
        const createdUsers = yield models_1.User.insertMany(data_1.users);
        const admin = createdUsers[0]._id;
        const sampleProducts = data_1.products.map((product) => {
            return Object.assign(Object.assign({}, product), { user: admin });
        });
        yield models_1.Product.insertMany(sampleProducts);
        console.log(` ✅ Data Imported `.inverse.blue.dim);
        process.exit();
    }
    catch (error) {
        console.error(` ! Error: `.inverse.red.bold + `${error.message}`);
        process.exit(1);
    }
});
const destroyData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.User.deleteMany();
        yield models_1.Product.deleteMany();
        yield models_1.Order.deleteMany();
        console.log(` ⚠️ Data Destroyed `.inverse.red.dim);
        process.exit();
    }
    catch (error) {
        console.error(` ! Error: `.inverse.red.bold + `${error.message}`);
        process.exit(1);
    }
});
if (process.argv[2] === "-d") {
    destroyData();
}
else {
    importData();
}

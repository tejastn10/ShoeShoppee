"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const bcryptjs_1 = require("bcryptjs");
exports.users = [
    {
        name: "Admin",
        email: "admin@admin.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Cool Boi",
        email: "cb@email.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Bad Boi",
        email: "bb@email.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Mean Girl",
        email: "mg@email.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: false,
    },
];

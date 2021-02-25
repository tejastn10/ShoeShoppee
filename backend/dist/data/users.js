"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const bcryptjs_1 = require("bcryptjs");
exports.users = [
    {
        name: "Main Admin",
        email: "admin@admin.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Side Admin",
        email: "side@admin.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Micheal Scott",
        email: "mscott28@gmail.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Ollie Bashirian",
        email: "ollbash4@yahoo.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Leola Carter",
        email: "leocarter3@gmail.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Haley Lehner",
        email: "haley_lehner@hotmail.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Calista Cummings",
        email: "calista71@yahoo.com",
        password: bcryptjs_1.hashSync("123456", 10),
        isAdmin: false,
    },
];

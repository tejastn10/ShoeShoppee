"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
require("colors");
const dotenv_1 = require("dotenv");
const db_1 = require("./config/db");
dotenv_1.config();
const app = express_1.default();
db_1.connectDB();
app.use(express_1.json());
app.get("/", (_req, res) => res.send("API Running on Port 5000"));
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";
app.listen(PORT, () => console.log(` 📡 Backend server: `.inverse.yellow.bold +
    ` Running in ${ENV} mode on port ${PORT}`));

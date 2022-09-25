"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imPro = express_1.default.Router();
const index_1 = require("./../../index");
imPro.get('/', index_1.checkForImg);
exports.default = imPro;

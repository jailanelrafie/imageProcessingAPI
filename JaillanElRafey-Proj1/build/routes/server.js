"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = __importDefault(require("./api/imageProcessing"));
const routes = express_1.default.Router();
routes.get('/', function (request, response) {
    response.send('main api route');
});
routes.use('/impro', imageProcessing_1.default);
exports.default = routes;

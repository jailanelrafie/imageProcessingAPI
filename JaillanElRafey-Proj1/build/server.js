"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Setting up server
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const server_1 = __importDefault(require("./routes/server"));
const port = 3000;
app.listen(port, function () {
    console.log('Server is running');
});
app.use('/api', server_1.default);
exports.default = app;

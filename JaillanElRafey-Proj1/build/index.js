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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.checkForImg = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function checkForImg(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const filename = request.query.filename;
        const width = request.query.width;
        const height = request.query.height;
        try {
            const validImage = fs_1.default.existsSync(path_1.default.join(__dirname, `./../assets/${filename}.jpg`));
            const alreadyResized = fs_1.default.existsSync(path_1.default.join(__dirname, `./../assets/${filename}-${width}x${height}.jpg`));
            const validValues = isValid(width, height);
            if (validImage == false && validValues == false) {
                return response.send('Image does not exist and values for width and/or height are not correct');
            }
            else if (validImage === true && alreadyResized === false && validValues === true) {
                const resizedImgPath = yield resizeImage(filename, width, height);
                return response.sendFile(resizedImgPath);
            }
            else if (validImage === false && alreadyResized === false && validValues === true) {
                return response.send('Image does not exist');
            }
            else if (alreadyResized === true) {
                return response.sendFile(path_1.default.join(__dirname, `./../assets/${filename}-${width}x${height}.jpg`));
            }
            else if (validImage === true && validValues === false) {
                throw Error;
            }
        }
        catch (error) {
            return response.send('Please enter valid values for width and height');
        }
    });
}
exports.checkForImg = checkForImg;
function resizeImage(filename, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        const imgPath = path_1.default.join(__dirname, `./../assets/${filename}.jpg`);
        const resizedImgPath = path_1.default.join(__dirname, `./../assets/${filename}-${width}x${height}.jpg`);
        const resizedImage = yield (0, sharp_1.default)(imgPath)
            .resize(parseInt(width), parseInt(height))
            .toFile(resizedImgPath);
        return resizedImgPath;
    });
}
exports.resizeImage = resizeImage;
function isValid(width, height) {
    if (isNaN(Number(width)) || isNaN(Number(height))) {
        return false;
    }
    else if (parseInt(width) <= 0 || parseInt(height) <= 0) {
        return false;
    }
    else {
        return true;
    }
}

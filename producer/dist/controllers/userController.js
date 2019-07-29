"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const MQService_1 = require("../lib/MQService");
class userController {
    constructor() {
        this.sendMsg = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            // this is demo messeges, write your logic here
            for (let i = 0; i < 20; i++) {
                yield MQService_1.publishToQueue(config.get("queueName"), i.toString());
            }
            res.send({ success: true });
        });
    }
}
exports.default = new userController();
//# sourceMappingURL=userController.js.map
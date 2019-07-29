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
const amqp = require("amqplib/callback_api");
const CONN_URL = config.get("rabbitMQCS");
let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
    });
});
exports.publishToQueue = (queueName, data) => __awaiter(this, void 0, void 0, function* () {
    ch.sendToQueue(queueName, Buffer.from(data), { persistent: true });
});
process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});
//# sourceMappingURL=MQService.js.map
import * as config from "config";
import * as amqp from 'amqplib/callback_api';

const CONN_URL = config.get("rabbitMQCS");
let ch = null;

amqp.connect(CONN_URL, function (err, conn) {
   conn.createChannel(function (err, channel) {
      ch = channel;
   });
});

export const publishToQueue = async (queueName, data) => {
   ch.sendToQueue(queueName, Buffer.from(data), {persistent: true});
}

process.on('exit', (code) => {
   ch.close();
   console.log(`Closing rabbitmq channel`);
});
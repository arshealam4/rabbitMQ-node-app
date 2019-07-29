
var amqp = require('amqplib/callback_api');
var config = require('config');

const CONN_URL = config.get("rabbitMQCS");

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume(config.get("queueName"), function (msg) {
        console.log('.....');
        setTimeout(function(){

          // put yout logic here
          console.log("Message:", msg.content.toString());  
          ch.ack(msg);
        }, 2000);
      },
      { noAck: false }
    );
  });
});
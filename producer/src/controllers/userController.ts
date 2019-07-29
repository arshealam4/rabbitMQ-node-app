import * as polyfill from "babel-polyfill";
import * as config from "config";
import { publishToQueue } from '../lib/MQService'

class userController {
    constructor() { }

    public sendMsg = async (req, res, next) => {

        // this is demo messeges, write your logic here
        for (let i = 0; i < 20; i++) {
            await publishToQueue(config.get("queueName"), i.toString());
        }

        res.send({success: true});
    }
}


export default new userController();

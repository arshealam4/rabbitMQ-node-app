import * as express from "express";
const router = express.Router();
import userController from "../controllers/userController";

/* GET users listing. */
router.post("/msg", userController.sendMsg);

export default router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const userController_1 = require("../controllers/userController");
/* GET users listing. */
router.post("/msg", userController_1.default.sendMsg);
exports.default = router;
//# sourceMappingURL=users.js.map
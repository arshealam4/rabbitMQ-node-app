"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
// registered all routes
const users_1 = require("./routes/users");
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const API = "/api/v1/";
app.use(API + "users", users_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
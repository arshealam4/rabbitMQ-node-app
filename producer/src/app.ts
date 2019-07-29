import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import * as logger from "morgan";


// registered all routes
import usersRouter from "./routes/users";

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const API = "/api/v1/";
app.use(API + "users", usersRouter);

export default app;

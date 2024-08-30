import express from "express";
import "dotenv/config";
import authRouter from "./routers/authRouter";
import path from "node:path";
import cookieParser from "cookie-parser";
import { NextFunction, Request, Response } from "express";
import { authorize } from "./middlewares/auth";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const fullpath = process.argv[1];

app.get("/", authorize, (req, res) => {
  return res.send("hello");
});

app.use("/api/auth", authRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Something Went Wrong!");
});

app.listen(PORT, () => {
  console.log("Server Listening at 8080!!");
});

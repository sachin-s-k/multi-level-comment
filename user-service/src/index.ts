// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig";
dotenv.config();

const app: Express = express();

// connect to the database
connectDB()

const port = process.env.PORT

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

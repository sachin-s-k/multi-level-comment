import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
})
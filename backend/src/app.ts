import express, { json, Application, Request, Response } from "express";
import "colors";
import { config } from "dotenv";

import { connectDB } from "./config/db";

config();

const app: Application = express();

connectDB();
app.use(json());

app.get("/", (_req: Request, res: Response) =>
  res.send("API Running on Port 5000")
);

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`
  )
);

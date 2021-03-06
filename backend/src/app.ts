import express, { json, Application, Request, Response } from "express";
import cors from "cors";
import "colors";
import { config } from "dotenv";
import morgan from "morgan";

import { connectDB } from "./config/db";
import { notFound, errorHandler } from "./middleware/error";

import { router as orderRoutes } from "./routes/order";
import { router as productRoutes } from "./routes/product";
import { router as userRoutes } from "./routes/user";

config();

const app: Application = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

connectDB();
app.use(cors());
app.use(json());

app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`
  )
);

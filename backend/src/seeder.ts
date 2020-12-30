import {} from "mongoose";
import { config } from "dotenv";
import "colors";

import { connectDB } from "./config/db";

import { users, products } from "./data";
import { User, Product, Order } from "./models";

config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);

    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: admin,
      };
    });
    await Product.insertMany(sampleProducts);

    console.log(` ✅ Data Imported `.inverse.blue.dim);
    process.exit();
  } catch (error) {
    console.error(` ! Error: `.inverse.red.bold + `${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log(` ⚠️ Data Destroyed `.inverse.red.dim);
    process.exit();
  } catch (error) {
    console.error(` ! Error: `.inverse.red.bold + `${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

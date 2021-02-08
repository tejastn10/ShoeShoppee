import { Request, Response } from "express";

import { Product } from "./../models";

export const getAllPoducts = async (_req: Request, res: Response) => {
  const products = await Product.find({});
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not found");
  }
};

export const postProduct = async (req: Request, res: Response) => {
  const product = new Product({
    user: req.body.user._id,
    name: "sample",
    image: "/images/file.jpg",
    brand: "sample",
    category: "sample",
    type: "sample",
    description: "sample",
    reviews: [],
    price: 1000,
    count: 10,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

export const putProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  const { count, price } = req.body;

  if (product) {
    product.count = count ? count : product.count;
    product.price = price ? price : product.price;
    await product.save();
    res.json({ message: "Product Updated" });
  } else {
    res.status(404);
    throw new Error("Product Not found");
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product deleted" });
  } else {
    res.status(404);
    throw new Error("Product Not found");
  }
};

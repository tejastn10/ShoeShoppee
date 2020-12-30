import { Request, Response } from "express";

import { Product } from "./../models/Product.model";

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

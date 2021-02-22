import { Request, Response } from "express";

import { Product } from "./../models";

export const searchProduct = async (req: Request, res: Response) => {
  const keyword: any = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await Product.find({ ...keyword });
  if (products.length === 0) {
    res.status(404);
    throw new Error("Searched Products not found");
  } else {
    res.json(products);
  }
};

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
  const {
    user,
    name,
    image,
    brand,
    category,
    type,
    description,
    price,
    count,
  } = req.body;

  const product = new Product({
    user: user._id,
    name,
    image: "/images/file.jpg",
    brand,
    category,
    type,
    description,
    reviews: [],
    price,
    count,
  });

  await product.save();
  res.status(201).json({ message: "Product Created" });
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

export const postReview = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  const { rating, comment } = req.body;

  if (product) {
    const reviewed = product.reviews.find(
      (r) => r.user.toString() === req.body.user._id.toString()
    );

    if (reviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      user: req.body.user._id,
      name: req.body.user.name,
      rating: Number(rating),
      comment,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, r) => r.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
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

import { Router } from "express";
import asyncHandler from "express-async-handler";
import { getAllPoducts, getProductById } from "../controllers/product";

export const router: Router = Router();

// @desc     Fetch all Products
// @route    GET /api/products
// @access   Public
router.get("/", asyncHandler(getAllPoducts));

// @desc     Fetch a Product
// @route    GET /api/products/:id
// @access   Public
router.get("/:id", asyncHandler(getProductById));

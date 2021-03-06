import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  getAllPoducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
  postReview,
  searchProduct,
} from "../controllers/product";
import { protect, admin } from "../middleware/auth";

export const router: Router = Router();

// @desc     Fetch all Products
// @route    GET /api/products
// @access   Public
router.get("/", asyncHandler(getAllPoducts));

// @desc     Search Products
// @route    GET /api/products/search
// @access   Public
router.get("/search", asyncHandler(searchProduct));

// @desc     Fetch a Product
// @route    GET /api/products/:id
// @access   Public
router.get("/:id", asyncHandler(getProductById));

// @desc     Create a Product
// @route    POST /api/products
// @access   Private/Admin
router.post(
  "/",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(postProduct)
);

// @desc     Update a Product
// @route    POST /api/products/:id
// @access   Private/Admin
router.put(
  "/:id",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(putProduct)
);

// @desc     Delete a Product
// @route    DELETE /api/products/:id
// @access   Private/Admin
router.delete(
  "/:id",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(deleteProduct)
);

// @desc     Add a Product Review
// @route    POST /api/products/:id/review
// @access   Private
router.post("/:id/review", asyncHandler(protect), asyncHandler(postReview));

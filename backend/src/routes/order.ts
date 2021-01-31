import { Router } from "express";
import asyncHandler from "express-async-handler";
import { postNewOrder } from "../controllers/order";
import { protect } from "../middleware/auth";

export const router: Router = Router();

// @desc     Create a New Order
// @route    POST /api/orders
// @access   Private
router.post("/", asyncHandler(protect), asyncHandler(postNewOrder));
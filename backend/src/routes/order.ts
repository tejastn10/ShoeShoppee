import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  postNewOrder,
  getOrders,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/order";
import { admin, protect } from "../middleware/auth";

export const router: Router = Router();

// @desc     Create a New Order
// @route    POST /api/orders
// @access   Private
router.post("/", asyncHandler(protect), asyncHandler(postNewOrder));

// @desc     Get all Orders of User
// @route    GET /api/orders/all
// @access   Private
router.get("/all", asyncHandler(protect), asyncHandler(getOrders));

// @desc     Get all Orders
// @route    GET /api/orders
// @access   Private/Admin
router.get(
  "/",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(getAllOrders)
);

// @desc     Get Order by Id
// @route    GET /api/orders/:id
// @access   Private
router.get("/:id", asyncHandler(protect), asyncHandler(getOrderById));

// @desc     Update order to be Delivered
// @route    GET /api/orders/:id/p&d
// @access   Private/Admin
router.put(
  "/:id/p&d",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(updateOrder)
);

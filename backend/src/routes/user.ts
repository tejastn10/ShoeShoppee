import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  postAuthUser,
  getUserProfile,
  putUpdateUser,
  postRegisterUser,
} from "../controllers/user";
import { protect } from "../middleware/auth";

export const router: Router = Router();

// @desc     Authenticate and Login User
// @route    POST /api/users/login
// @access   Public
router.post("/login", asyncHandler(postAuthUser));

// @desc     Authenticate and Register a New User
// @route    POST /api/users
// @access   Public
router.post("/", asyncHandler(postRegisterUser));

// @desc     Get User Profile
// @route    GET /api/users/profile
// @access   Private
router.get("/profile", asyncHandler(protect), asyncHandler(getUserProfile));

// @desc     Update User Profile
// @route    PUT /api/users/profile
// @access   Private
router.put("/profile", asyncHandler(protect), asyncHandler(putUpdateUser));

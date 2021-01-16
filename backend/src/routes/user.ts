import { Router } from "express";
import asyncHandler from "express-async-handler";
import { postAuthUser, getUserProfile } from "../controllers/user";
import { protect } from "../middleware/auth";

export const router: Router = Router();

// @desc     Authenticate User and get Token
// @route    POST /api/users/login
// @access   Public
router.post("/login", asyncHandler(postAuthUser));

// @desc     Get User Profile
// @route    GET /api/users/profile
// @access   Private
router.get("/profile", asyncHandler(protect), asyncHandler(getUserProfile));

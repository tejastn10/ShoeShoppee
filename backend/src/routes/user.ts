import { Router } from "express";
import asyncHandler from "express-async-handler";
import { postUser } from "../controllers/user";

export const router: Router = Router();

// @desc     Authenticate User and get Token
// @route    POST /api/users/login
// @access   Public
router.get("/login", asyncHandler(postUser));

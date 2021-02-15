import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  postAuthUser,
  getUserProfile,
  putUpdateUser,
  postRegisterUser,
  getUsers,
  putUpdateUserById,
  deleteUser,
} from "../controllers/user";
import { protect, admin } from "../middleware/auth";

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

// @desc     Get All Users
// @route    GET /api/users
// @access   Private/Admin
router.get(
  "/",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(getUsers)
);

// @desc     Update User by id
// @route    PUT /api/users/:id
// @access   Private/Admin
router.put(
  "/:id",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(putUpdateUserById)
);

// @desc     Delete a User
// @route    DELETE /api/users/:id
// @access   Private/Admin
router.delete(
  "/:id",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(deleteUser)
);

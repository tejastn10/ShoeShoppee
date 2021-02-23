import { Request, Response } from "express";
import { generateToken } from "../utils/generateToken";

import { User } from "./../models";

export const postAuthUser = async (req: Request, res: Response) => {
  const { email, password } = await req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("❗ Invalid Email or Password!");
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.body.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("❌ User Not Found!");
  }
};

export const putUpdateUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.body.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("❌ User Not Found!");
  }
};

export const postRegisterUser = async (req: Request, res: Response) => {
  const { name, email, password } = await req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("❗ User Already Registered!");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("❗ Invalid User data!");
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find({});
  res.json(users);
};

export const putUpdateUserById = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isAdmin = req.body.isAdmin;

    await user.save();

    res.json({ message: "✅ User Privileges updated" });
  } else {
    res.status(404);
    throw new Error("❌ User Not Found!");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "🗑 User deleted!" });
  } else {
    res.status(404);
    throw new Error("❌ User Not found!");
  }
};

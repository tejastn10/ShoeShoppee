import { Request, Response } from "express";
import { generateToken } from "../utils/generateToken";

import { User } from "./../models/User.model";

export const postUser = async (req: Request, res: Response) => {
  const { email, password } = await req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password!");
  }
};

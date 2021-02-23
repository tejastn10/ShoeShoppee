import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../models";

type decoded = {
  id: string;
};

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = <decoded>verify(token, process.env.JWT_SECRET!);

      req.body.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      res.status(401);
      throw new Error("❌ Not Authorized! Token Failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("❌ Not Authorized! Token not found");
  }

  next();
};

export const admin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.user && req.body.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("❌ Not Authorized as an Admin");
  }
};

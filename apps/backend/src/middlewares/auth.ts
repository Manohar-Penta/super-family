import { NextFunction, Request, Response } from "express";
import jwt, { VerifyErrors, JwtPayload, VerifyCallback } from "jsonwebtoken";
import "dotenv/config";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const handler: VerifyCallback<JwtPayload | string> = (error, decoded) => {
    throw new Error("Error while authenticating!!!");
  };

  const user = req.cookies.user;

  if (!user) throw "Cannot authenticate!!";

  if (process.env.JWT_SECRET) jwt.verify(user, process.env.JWT_SECRET, handler);
};

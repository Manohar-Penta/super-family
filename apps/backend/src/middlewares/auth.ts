import { NextFunction, Request, Response } from "express";
import jwt, { VerifyErrors, JwtPayload, VerifyCallback } from "jsonwebtoken";
import "dotenv/config";

export const authorize = (req: any, res: any, next: any) => {
  const handler: VerifyCallback<JwtPayload | string> = (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: "Token invalid or expired" });
    }

    req.jwtPayload = decoded; // Store user data in the request object
    next(); // Proceed to the next middleware or route handler
  };

  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) throw "Cannot authenticate!!";

  if (process.env.JWT_SECRET)
    jwt.verify(token, process.env.JWT_SECRET, handler);
};

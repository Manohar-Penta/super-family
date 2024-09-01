import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, VerifyCallback } from "jsonwebtoken";
import { supabase } from "../../utils/supabaseClient";
import { HttpStatusCode } from "axios";
import "dotenv/config";

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;
  if (!token) return res.json({ error: "Required Fields Missing!!" });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error) {
    next(error);
  }

  if (process.env.JWT_SECRET && user) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return res.status(HttpStatusCode.Accepted).send({ token });
  }

  return res.status(500);
};

export const signOut = (req: Request, res: Response, next: NextFunction) => {
  const signOutHandler: VerifyCallback<JwtPayload | string> = (
    error,
    decoded
  ) => {
    if (error) throw error;
  };

  const user = req.cookies.user;
  if (!user) throw "Required Fields Missing!!";

  if (process.env.JWT_SECRET && user)
    res.cookie("user", jwt.sign({ id: user.id }, process.env.JWT_SECRET));
  else return res.status(500);

  jwt.verify(user, process.env.JWT_SECRET, signOutHandler);

  res.clearCookie("user");
  return res
    .status(HttpStatusCode.Ok)
    .send({ msg: "Logged out successfully!!" });
};

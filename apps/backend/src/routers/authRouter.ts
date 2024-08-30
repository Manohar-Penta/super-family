import express from "express";
import { supabase } from "../utils/supabaseClient";
const router = express.Router();
import jwt from "jsonwebtoken";

router.post("/signin", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.json({ error: "Email is required!!" });
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
  });

  if (error) {
    console.log(error);
    return res.status(401).send({ status: false, error });
  }

  return res.send({ status: true, data });
});

router.post("/verify", async (req, res) => {
  const { email, token } = req.body;
  if (!token || !email) return res.json({ error: "Incomplete request!!" });

  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email,
    token: token,
    type: "email",
  });

  if (error) {
    console.log(error);
    return res.send({ error: error });
  } else if (session) {
    console.log(session);
    return res
      .cookie("accessToken", session.access_token)
      .cookie("refreshToken", session.refresh_token)
      .json({ session });
  }
});

router.get("/identify", async (req, res) => {
  const { accessToken, refreshToken } = req.cookies;

  // console.log(accessToken, refreshToken);
  if (!accessToken || !refreshToken)
    return res.status(401).send({ msg: "User not authenticated!!" });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);

  if (error)
    return res.status(401).send({ msg: "user is not authenticated!!" });

  console.log(user);

  return res.send({ user });
});

export default router;

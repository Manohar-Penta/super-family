import express from "express";
import { signIn, signOut } from "../controllers/auth/controllers";

const router = express.Router();

router.post("/signin", signIn);

router.get("/logout", signOut);

export default router;

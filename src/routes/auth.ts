import express from "express";
import { signInHandler, signUpHandler } from "../controllers/auth.ts";

const router = express.Router();

router.post("/sign_up", signUpHandler);
router.post("/sign_in", signInHandler);

export default router;

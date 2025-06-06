import express from "express";
import { ask } from "../controllers/chat.ts";

const router = express.Router();

router.post("/ask", ask)

export default router

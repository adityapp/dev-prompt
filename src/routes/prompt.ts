import express from "express";
import { createPromptHandler, testPromptHandler } from "../controllers/prompt.ts";

const router = express.Router();

router.post("", createPromptHandler);
router.post("/:id/test", testPromptHandler);

export default router;

import { runGemini } from "../services/gemini.ts";
import type { Request, Response } from "express";

export const ask = async (req: Request, res: Response) => {
  const { prompt } = req.body;
  if (!prompt) res.status(400).json({ error: "Prompt is required" });

  try {
    const result = await runGemini(prompt);
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error: "Failed to get AI response" });
  }
};

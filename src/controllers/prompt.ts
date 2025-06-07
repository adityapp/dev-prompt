import type { Request, Response } from "express";
import { createPrompt, testPrompt } from "../services/prompt.ts";

export const createPromptHandler = async (req: Request, res: Response) => {
  const { title, template, description, tags } = req.body;
  try {
    await createPrompt({ title, template, description, tags });
    res.json({ message: "ok" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create prompt" });
  }
};

export const testPromptHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { variables } = req.body;
  if (!variables.blog_content)
    res.status(400).json({ error: "Prompt is required" });

  try {
    const result = await testPrompt(Number(id), variables);
    res.json({ message: {
      prompt_answer: result
    } });
  } catch (error) {
    res.status(500).json({ error: "Failed to get AI response" });
  }
};

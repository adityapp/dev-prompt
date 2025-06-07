import type { Request, Response } from "express";
import { signIn, signUp } from "../services/auth.ts";

export const signUpHandler = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    await signUp({ name, email, password });
    res.json({ message: "ok" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const signInHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await signIn(email, password);
    res.json({
      message: {
        token: result,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

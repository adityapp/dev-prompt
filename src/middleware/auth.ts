import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) res.status(401).json({ error: "Missing token" });

  const token = authHeader!.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
    };
    (req as any).user = payload;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

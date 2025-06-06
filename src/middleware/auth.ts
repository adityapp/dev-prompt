import type { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token == "very secret") {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

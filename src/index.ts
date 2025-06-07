import dotenv from "dotenv";
dotenv.config()

import express from "express";
import { logger } from "./middleware/logger.ts";
import { auth } from "./middleware/auth.ts";
import authRoutes from "./routes/auth.ts";
import promptRoutes from "./routes/prompt.ts";

const app = express();
const port = process.env.APP_PORT || 3000

app.use(express.json());
app.use(logger);

// no auth
app.use("/auth", authRoutes);

// using auth
app.use(auth)
app.use("/prompt", promptRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

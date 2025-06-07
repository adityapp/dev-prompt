import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const signUp = async (user: {name: string, email: string, password: string}) => {
  user.password = await bcrypt.hash(user.password, 10);
  await prisma.user.create({data: user});
};

export const signIn = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if(!user) throw new Error("User not found")

  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch) throw new Error("Invalid credentials")

  const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!, {
    expiresIn: "1h"
  })

  return token
};

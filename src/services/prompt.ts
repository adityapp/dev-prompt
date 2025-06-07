import { PrismaClient } from "@prisma/client";
import { runGemini } from "../services/gemini.ts";

const prisma = new PrismaClient();

export const createPrompt = async (prompt: {
  title: string;
  description: string;
  template: string;
  tags: string[];
}) => {
  await prisma.prompt.create({ data: prompt });
};

export const testPrompt = async (
  id: number,
  variables: { blog_content: string }
) => {
  const prompt = await prisma.prompt.findUnique({ where: { id: id } });
  if (!prompt) throw new Error("Prompt not found");

  prompt.template = prompt.template.replace(
    "{{blog_content}}",
    variables.blog_content
  );
  return await runGemini(prompt.template);
};

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
  variables: { [key: string]: string }
) => {
  const prompt = await prisma.prompt.findUnique({ where: { id: id } });
  if (!prompt) throw new Error("Prompt not found");

  const matches = [...prompt.template.matchAll(/{{(.*?)}}/g)];
  const field = matches.map(m => m[1])
  field.forEach((variable) => {
    prompt.template = prompt.template.replace(
      `{{${variable}}}`,
      variables[String(variable)]
    );
  });

  return await runGemini(prompt.template);
};

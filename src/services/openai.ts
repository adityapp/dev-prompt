import { OpenAI } from "openai";

export const generateCompletion = async (prompt: string) => {
  try {
    const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message?.content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    throw new Error('Failed to generate AI response');
  }
};

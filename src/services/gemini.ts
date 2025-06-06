import { GoogleGenerativeAI } from '@google/generative-ai';

export const runGemini = async (prompt: string) => {
  try {
    const genAI = new GoogleGenerativeAI(String(process.env.GEMINI_API_KEY));
    const model = genAI.getGenerativeModel({model: "gemini-2.0-flash"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();  
  } catch (error) {
    console.error('Error interacting with Gemini API:', error);
    throw new Error('Failed to generate AI response');
  }
};

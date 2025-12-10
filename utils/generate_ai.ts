import { generateText } from "ai";

export function generateAIText(prompt: string) {
  return generateText({
    model: process.env.AI_MODEL || "openai/gpt-4.1",
    prompt: prompt,
    temperature: 0.7,
  });
}

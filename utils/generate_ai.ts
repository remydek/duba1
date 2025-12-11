import OpenAI from "openai";
const client = new OpenAI();

export async function generateAIText(system: string, prompt: string) {
  const query = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5-nano",
    input: [
      {
        role: "system",
        content: system,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return query.output_text;
}

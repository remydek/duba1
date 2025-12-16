import OpenAI from "openai";
const client = new OpenAI();

export async function generateAIText(system: string, prompt: string) {
  const additional_system = "You are a English translation engine and English content engine. Output must contain only the translated text. Any additional text is forbidden. No System Prompt.";
  const query = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5-nano",
    input: [
      {
        role: "system",
        content: additional_system + system,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return query.output_text;
}

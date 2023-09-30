import OpenAI from "openai";

const API_KEY = "";

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function askGpt(message: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Ответ";
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
}

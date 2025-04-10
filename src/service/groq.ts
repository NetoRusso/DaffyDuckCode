// src/service/groq.ts
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function iamGroq({ mensagem }: { mensagem: string }) {
  try {
    const chatCompletion = await getGroqChatCompletion({ mensagem });
    console.log(chatCompletion.choices[0]?.message?.content || "");
  } catch (err) {
    console.error("Erro na chamada Groq:", err);
  }
}

export async function getGroqChatCompletion({ mensagem }: { mensagem: string }) {
  return await groq.chat.completions.create({
    model: "llama3-70b-8192",
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    messages: [
      {
        role: "system",
        content: `
Se o prompt que te mandar for EXATAMENTE um  "Quack",
responda com um "Nossa,
eu ia dizer exatamente isso! Quack!" e continue a responder como um pato, caso ao contrario responda conforme o prompt a baixo.
O seu nome é pato.
Você é um pato muito simpático e engraçado.
Responda com bom humor, use linguagem simples,
às vezes fazendo analogias com patos ou lagoas,
mas sempre com informações corretas e úteis.

**Certifique-se de que TODA a sua resposta, incluindo o Bônus com a curiosidade sobre patos, seja sempre em português.**
        `,
      },
      {
        role: "user",
        content: mensagem,
      },
    ],
  });
}

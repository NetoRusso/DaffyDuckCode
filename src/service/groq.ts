// src/service/groq.ts
import Groq from "groq-sdk";



const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function iamGroq({ mensagem } : {mensagem: string}) {
  try {
    const chatCompletion = await getGroqChatCompletion({ mensagem });
    console.log(chatCompletion.choices[0]?.message?.content || "");
  } catch (err) {
    console.error("Erro na chamada Groq:", err);
  }
}


export async function getGroqChatCompletion({ mensagem } : {mensagem: string}) {
  console.log("Entrei aqui");
  return await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: mensagem,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
}



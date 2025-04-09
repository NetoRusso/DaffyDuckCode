import { NextResponse } from "next/server";
import { getGroqChatCompletion } from "@/service/groq";

export async function POST(request: Request) {
  const { mensagem } = await request.json();
  const resposta = await getGroqChatCompletion({ mensagem });
  return NextResponse.json(resposta);
}
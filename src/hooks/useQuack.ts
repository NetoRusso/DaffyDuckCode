import { useContext } from "react";
import { QuackContext } from "@/context/quack";
import { z } from "zod";

const quackResponseSchema = z.object({
  choices: z.array(
    z.object({
      message: z.object({
        content: z.string(),
      }),
    })
  ),
});

export const useQuack = () => {
  const { setHistorico, historico, setFalando } = useContext(QuackContext);

  const chamaIa = async (mensagem: string) => {
    try {
      setFalando(true);

      const res = await fetch("/api/groq", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ mensagem }),
      });

      const json = await res.json();
      const data = quackResponseSchema.safeParse(json);

      if (!data.success) {
        console.error("O Pato não respondeu : ", data.error);
        throw new Error("O Pato não respondeu");
      }

      const conteudo = data.data.choices[0].message.content;

      setHistorico((prev) => [
        ...prev,
        { pergunta: mensagem, resposta: ""}
      ]);

      let resposta = "";
      const velocidade = 10;

      for (let i =0; i < conteudo.length; i++) {
        resposta += conteudo[i];

        setHistorico((prev) => {
          const novoHistorico = [...prev];
          novoHistorico[novoHistorico.length -1] = {
            pergunta: mensagem,
            resposta,
          };
          return novoHistorico;
        });
        await new Promise((r) => setTimeout(r, velocidade));
      }

    } catch (error) {
      console.error("O Pato não está disponível, ele deixou a mensagem: ", error);
      setHistorico([
        ...historico,
        { pergunta: mensagem, resposta: "O Pato não está disponível, ele deixou a mensagem" },
      ]);
    } finally {
      setTimeout(() => setFalando(false), 1000);
    }
  };

  return { chamaIa };
};

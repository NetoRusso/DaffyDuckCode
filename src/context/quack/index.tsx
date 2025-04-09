'use client';

import { createContext, useState, useEffect } from "react";

type Mensagem = {
  pergunta: string;
  resposta: string;
};

export type QuackContextType = {
  falando: boolean;
  setFalando: React.Dispatch<React.SetStateAction<boolean>>;
  historico: Mensagem[];
  setHistorico: React.Dispatch<React.SetStateAction<Mensagem[]>>;
};

const QuackContext = createContext<QuackContextType>({} as QuackContextType);

const QuackProvider = ({ children }: { children: React.ReactNode }) => {
  const [falando, setFalando] = useState(false);
  const [historico, setHistorico] = useState<Mensagem[]>([]);

  useEffect(() => {
    if (falando) {
      const audio = new Audio("/assets/audios/quack-sound.mp3");
      audio.play();
    }
  }, [falando]);

  return (
    <QuackContext.Provider value={{ falando, setFalando, historico, setHistorico }}>
      {children}
    </QuackContext.Provider>
  );
};

export { QuackProvider, QuackContext };
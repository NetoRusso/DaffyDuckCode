'use client';

import { createContext, useState } from "react";

export type TaskContextType = {
  mensagem: string;
  setMensagem: React.Dispatch<React.SetStateAction<string>>;
};

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [mensagem, setMensagem] = useState("");

  return (
    <TaskContext.Provider value={{ mensagem, setMensagem }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
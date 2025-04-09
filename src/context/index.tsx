import { QuackProvider } from "./quack";


export const AppProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <QuackProvider>
        {children}
    </QuackProvider>
  )

};
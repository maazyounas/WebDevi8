import { createContext, useState } from "react";
import type { ReactNode } from "react";

type AppContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("Maaz");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
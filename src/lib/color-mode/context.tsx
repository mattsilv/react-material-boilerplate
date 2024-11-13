import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface ColorMode {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorMode | undefined>(undefined);

interface ColorModeProviderProps {
  children: ReactNode;
}

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const hours = new Date().getHours();
    const isDarkMode = hours < 6 || hours >= 18;
    setMode(isDarkMode ? "dark" : "light");
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export const useColorMode = (): ColorMode => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

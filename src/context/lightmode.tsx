import { useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

const themeContext = createContext<Theme>("light");
const ThemeUpdateContext = createContext<() => void>(() => {});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <themeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </themeContext.Provider>
    );
}

export const useTheme = () => useContext(themeContext);
export const useToggleTheme = () => useContext(ThemeUpdateContext);


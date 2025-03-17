import {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
} from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
    initialTheme = "light",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<string>(initialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

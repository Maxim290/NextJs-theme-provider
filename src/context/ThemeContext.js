import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children, initialTheme = "light" }) {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

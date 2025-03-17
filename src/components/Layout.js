import dynamic from "next/dynamic";
import { useTheme } from "../context/ThemeContext";

const Header = dynamic(() => import("./Header"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function Layout({ children }) {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <Header />
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
            <main>{children}</main>
            <Footer />
        </div>
    );
}

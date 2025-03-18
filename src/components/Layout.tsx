import dynamic from "next/dynamic";
import { useTheme } from "../context/ThemeContext";
import { ReactNode } from "react";

const Header = dynamic(() => import("./Header"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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

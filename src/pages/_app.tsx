import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import type { AppContext } from "next/app";

interface MyAppProps extends AppProps {
    initialTheme: string;
}

function MyApp({ Component, pageProps, initialTheme }: MyAppProps) {
    return (
        <ThemeProvider initialTheme={initialTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
    const initialTheme = ctx.req?.headers.cookie?.includes("theme=dark")
        ? "dark"
        : "light";
    return { initialTheme };
};

export default MyApp;

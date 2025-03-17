import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, initialTheme }) {
    return (
        <ThemeProvider initialTheme={initialTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async ({ ctx }) => {
    const initialTheme = ctx.req?.headers.cookie?.includes("theme=dark")
        ? "dark"
        : "light";
    return { initialTheme };
};

export default MyApp;

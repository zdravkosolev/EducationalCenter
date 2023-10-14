import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/icons/icons.css";
import type { AppProps } from "next/app";
import Footer from "../components/elements/Footer";
import Header from "../components/elements/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

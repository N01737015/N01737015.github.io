import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

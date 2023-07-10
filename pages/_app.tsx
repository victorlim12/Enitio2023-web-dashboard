import "./globals.css";
import Layout from "./layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../config/createEmotionCache";
import Head from "next/head";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const metadata = {
  title: "ENITIO 2023",
  description: "Honestly now is Loren Ipsum",
};

export default function RootLayout({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

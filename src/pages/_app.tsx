import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import config from "../../next-seo.config";

import logo from "/public/logo.png";

import { Roboto } from "next/font/google";
import Head from "next/head";
import { Toaster } from "sonner";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="shortcut icon" href={logo.src} type="image/x-icon" />
        <meta
          name="follow.it-verification-code-cjlTVWx4TGtoUTgvZ3VrSDNLM0ZYb3psTzFCMHNabDYzMVNOTTFLc0M3ckNmejgvQXpDK29ZNFFGRE44ZVhKcmtldXVDU0VKb0crNG1LVjJmbUl6bnVvd0ZzYmZwVm5yd3FnTHluTjd0T0hqU256Wk81Rk9VT0JtUm15WWg5WFp8THdvS2hjWlNmL0l4b0t2b255bUhWWDV0T1F5ZEpjZWZTclBtanRENkx3WT0="
          content="V3jNBphJVdeQWFweQ5wF"
        />
      </Head>
      <DefaultSeo {...config} />

      <Layout>
        <>
          <Toaster expand={false} position="top-right" richColors />
          <PageTransition>
            <main className={roboto.className}>
              <Component {...pageProps} />
            </main>
          </PageTransition>
        </>
      </Layout>
    </>
  );
}

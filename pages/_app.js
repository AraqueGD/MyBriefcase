import "bootswatch/dist/cosmo/bootstrap.min.css";
import Head from "next/head";
import "../global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Camilo Araque Portfolio" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

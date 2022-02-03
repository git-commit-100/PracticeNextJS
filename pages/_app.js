import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  //router events
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <>
      {loading && <LoadingSpinner />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

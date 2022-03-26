import "../styles/globals.css";
import "../styles/typography.css"
import "../styles/elements.css"
import "../styles/page.css";
import "../styles/utils.css";

import Layout from "../components/layout"


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

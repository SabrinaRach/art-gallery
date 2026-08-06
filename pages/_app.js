import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";

/* ---- FETCH DATA FROM API ---*/
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  /* error handling */
  if (error) return <div>Failed to load art pieces</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} artPieces={data} />
    </>
  );
}

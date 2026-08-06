import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useState, useEffect } from "react";

/* ---- FETCH DATA FROM API ---*/
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  /* state has info for all art pieces, including whether they are marked as favorites or not.*/
  const [artpieceInfo, setArtpieceInfo] = useState([]);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  /* if data changes, update the artpieceInfo state with the new data. This ensures that the component always has the latest information about the art pieces. */
  useEffect(() => {
    if (data) {
      setArtpieceInfo(
        data.map((item) => ({
          ...item,
          isFavorite: false, // Initialize isFavorite property for each art piece
        }))
      );
    }
  }, [data]);

  /* error handling */
  if (error) return <div>Failed to load art pieces</div>;
  if (isLoading) return <div>Loading...</div>;

  /* --- Mark art pieces as favorites ----*/

  /*The toggleFavorite function updates the state when a user marks or unmarks an art piece as a favorite. */

  function toggleFavorite(slug) {
    setArtpieceInfo((prevInfo) => {
      return prevInfo.map((item) => {
        if (item.slug === slug) {
          /* copy item, only change the isFavorite property to its opposite value (true becomes false, and false becomes true). This allows users to mark or unmark an art piece as a favorite. */
          return { ...item, isFavorite: !item.isFavorite };
        } else {
          return item;
        }
      });
    });
  }

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component
        {...pageProps}
        artpieceInfo={artpieceInfo}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}

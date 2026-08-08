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

  /* if data changes, update the artpieceInfo state with the new data.
   This ensures that the component always has the latest information about the art pieces. 
   Load from local Storage or API*/
  useEffect(() => {
    if (!data) return;

    /* see if there is already saved data in browser with the name artpieceInfo */
    const savedArtPieces = localStorage.getItem("artpieceInfo");

    /* if there is data reload it in state 
    use JSON.parse to convert the data from text(string) to JS object*/
    if (savedArtPieces) {
      setArtpieceInfo(JSON.parse(savedArtPieces));

      /* if there is no data take it from API and add*/
    } else {
      const initialData = data.map((item) => ({
        ...item,
        isFavorite: false,
        comments: [],
      }));

      setArtpieceInfo(initialData);
    }
  }, [data]);

  // Save in browser whenever state of artpieceInfo changes
  //JSON.stringify to convert JS array to text
  useEffect(() => {
    if (artpieceInfo.length > 0) {
      localStorage.setItem("artpieceInfo", JSON.stringify(artpieceInfo));
    }
  }, [artpieceInfo]);

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
        artPieces={artpieceInfo}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}

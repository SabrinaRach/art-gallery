import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({ Piece }) {
    return (
        <article>
            <Link href="/art-pieces">Back to Gallery</Link>
            <Image src={artPiece.imageSource} alt={Piece.name} />
            <h1>{title}</h1>

            <h2>{artPiece.title}</h2>
            <span>{artPiece.artist} {Piece.year}</span>
            <p>{artPiece.genre}</p>
  </article>
    );
}
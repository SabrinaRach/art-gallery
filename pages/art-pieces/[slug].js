import { useRouter } from 'next/router';
import Link from 'next/link';
import ArtPieceDetails from '../../components/ArtPieceDetails';

export default function ArtPiecePage({ artPieces }) {
    const router = useRouter();
    const { slug } = router.query;

    const artPiece = artPieces.find((artPiece) => artPiece.slug === slug);

    if (!artPiece) {
        return <p>Loading...</p>;
    }

    return (  
    <>
    <ArtPieceDetails artPiece={artPiece} />;
    </>
    )
}
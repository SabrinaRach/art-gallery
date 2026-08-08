import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <>
      <nav
        className="navigation"
        style={{
          display: "flex",
          justifyContent: "flex-end", // Aligns the items to the right side
          gap: "30px",
          padding: "1rem 2rem",
          width: "100%", // Spans the full width of the screen/parent
          boxSizing: "border-box", // Ensures padding doesn't cause overflow

          fontWeight: "500",
          transition: "color 0.1s ease, transform 0.1s ease",
        }}
      >
        <Link href="/">
          <Image
            className="navigation-logo"
            src="/images/Spotlight_icon.png"
            alt="Spotlight"
            width={100}
            height={100}
            onMouseEnter={() => setHoveredLink("spotlight")}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              borderRadius: "20px",
              objectFit: "contain",
              transition: "transform 0.2s ease",
              transform:
                hoveredLink === "spotlight" ? "scale(1.1)" : "scale(1)",
            }}
          />
        </Link>
        <Link href="/art-pieces">
          <Image
            className="navigation-logo"
            src="/images/Art_Gallery_icon.png"
            alt="Gallery"
            width={100}
            height={100}
            onMouseEnter={() => setHoveredLink("gallery")}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              borderRadius: "20px",
              objectFit: "contain",
              transition: "transform 0.2s ease",
              transform: hoveredLink === "gallery" ? "scale(1.1)" : "scale(1)",
            }}
          />
        </Link>
        <Link href="/Favorites">
          <Image
            className="navigation-logo"
            src="/images/favorite_Button.png"
            alt="Favorites"
            width={100}
            height={100}
            onMouseEnter={() => setHoveredLink("favorite")}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              borderRadius: "20px",
              objectFit: "contain",
              transition: "transform 0.2s ease",
              transform: hoveredLink === "favorite" ? "scale(1.1)" : "scale(1)",
            }}
          />
        </Link>
      </nav>
      {/* for tablet and smartphone, navigation is centered when max-width is smaller than 768px and the logos become smaller */}
      <style jsx>{`
        @media (max-width: 768px) {
          .navigation {
            justify-content: center !important;
          }
          :global(.navigation-logo) {
            width: 70px !important;
            height: 70px !important;
          }
        }
      `}</style>
    </>
  );
}

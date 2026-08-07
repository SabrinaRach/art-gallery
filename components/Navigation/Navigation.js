import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <nav
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
            transform: hoveredLink === "spotlight" ? "scale(1.1)" : "scale(1)",
          }}
        />
      </Link>
      <Link href="/art-pieces">
        <Image
          src="/images/Gallery_icon.png"
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
          src=""
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
  );
}

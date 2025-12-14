import Link from "next/link";
import { useState } from "react";

// Main navigation bar component
export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#000000",   // black navbar background
        padding: "15px 30px",
      }}
    >
      {/* Navigation menu list */}
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Individual navigation links */}
        <NavItem href="/" text="Home" />
        <NavItem href="/grocery" text="Grocery" />
        <NavItem href="/pantry" text="Pantry" />
        <NavItem href="/chores" text="Chores" />
        <NavItem href="/bills" text="Bills" />
        <NavItem href="/notes" text="Notes" />
        <NavItem href="/profile" text="Profile" />
      </ul>
    </nav>
  );
}

// Reusable navigation item with hover effect
function NavItem({ href, text }: { href: string; text: string }) {
  // Track hover state for the link
  const [hover, setHover] = useState(false);

  return (
    <li>
      <Link
        href={href}
        // Change styles when mouse enters or leaves
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          color: hover ? "#000000" : "#ffffff",      // text color changes on hover
          backgroundColor: hover ? "#ffffff" : "transparent", // white box on hover
          padding: "6px 10px",
          borderRadius: "4px",
          textDecoration: "none",
          fontSize: "15px",
        }}
      >
        {text}
      </Link>
    </li>
  );
}

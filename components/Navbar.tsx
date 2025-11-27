import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "#222", padding: "15px" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", color: "white" }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/grocery">Grocery</Link></li>
        <li><Link href="/pantry">Pantry</Link></li>
        <li><Link href="/chores">Chores</Link></li>
        <li><Link href="/bills">Bills</Link></li>
        <li><Link href="/notes">Notes</Link></li>
        <li><Link href="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

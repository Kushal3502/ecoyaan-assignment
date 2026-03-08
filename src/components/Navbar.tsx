import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Ecoyaan
        </Link>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

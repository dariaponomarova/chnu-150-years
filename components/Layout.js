import Link from "next/link";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/history", label: "Історія" },
  { href: "/campus", label: "Кампус" },
  { href: "/people", label: "Люди" }
];

export default function Layout({ children }) {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <span className="badge">150</span>
          <div>
            <p className="brand">ЧНУ ім. Ю. Федьковича</p>
            <p className="tagline">років спадщини і розвитку</p>
          </div>
        </div>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <p>1875–2025: Чернівецький національний університет. Разом творимо наступні 150 років.</p>
      </footer>
    </div>
  );
}

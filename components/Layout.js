import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/history", label: "Історія" },
  { href: "/campus", label: "Кампус" },
  { href: "/people", label: "Люди" },
  { href: "/facts", label: "10 цікавинок" },
  { href: "/author", label: "Про автора" },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  return (
    <div className="page">
      <header className="header">
        <a href="/">
          <img src="/assets/logo.svg" alt="Логотип ЧНУ 150" width={230} height={60} />
        </a>
        <button
          className="burger"
          onClick={handleToggle}
          aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" onClick={handleClose}>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <p>© Дар'я Пономарьова. Всі права захищено. 2025</p>
      </footer>
    </div>
  );
}

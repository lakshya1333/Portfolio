"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "../data";

const items = [
  { name: "Work", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="nav" data-quiet>
      <Link href="/" className="nav-mark" aria-label="Lakshya Jain, home" onClick={() => setOpen(false)}>
        LJ
      </Link>

      <nav className="nav-links" aria-label="Main">
        {items.map((it) => (
          <Link
            key={it.path}
            href={it.path}
            className="nav-link"
            aria-current={pathname === it.path ? "page" : undefined}
          >
            {it.name}
          </Link>
        ))}
        <a href={profile.cv} download className="nav-cv">
          Download CV
        </a>
      </nav>

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div id="mobile-menu" className="nav-sheet">
          {[{ name: "Home", path: "/" }, ...items].map((it) => (
            <Link
              key={it.path}
              href={it.path}
              className="nav-sheet-link"
              aria-current={pathname === it.path ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {it.name}
            </Link>
          ))}
          <a href={profile.cv} download className="nav-sheet-cv">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

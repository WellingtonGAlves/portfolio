import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.timeline, href: "#timeline" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-mono font-bold text-primary text-sm">
          WGA<span className="text-muted-foreground">.</span>dev
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

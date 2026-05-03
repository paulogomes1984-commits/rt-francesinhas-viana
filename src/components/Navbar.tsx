import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/rt-logo.png";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Horário", href: "#horario" },
  { label: "Críticas", href: "#criticas" },
  { label: "Take Away", href: "#takeaway" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={logoImg} alt="RT" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-serif text-lg font-bold text-foreground">RT <span className="text-gradient-gold">Francesinhas</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

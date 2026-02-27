import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          vezza<span className="text-primary">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#modules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Modules</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <Button size="sm">Get Early Access</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          <a href="#features" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Features</a>
          <a href="#modules" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Modules</a>
          <a href="#about" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>About</a>
          <Button size="sm" className="w-full">Get Early Access</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

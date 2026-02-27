const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="font-display text-lg font-bold text-background">
            vezza<span className="text-secondary">.dev</span>
          </a>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#features" className="hover:text-background transition-colors">Features</a>
            <a href="#modules" className="hover:text-background transition-colors">Modules</a>
            <a href="#about" className="hover:text-background transition-colors">About</a>
          </div>
          <p className="text-sm text-background/40">
            © 2026 vezza.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Menu } from 'lucide-react';

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <img src="/flame-icon.svg" alt="logo" className="h-6 w-6" />
          Vivid
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#book" className="hover:text-white">Book</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Login</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

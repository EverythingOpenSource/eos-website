import { useState } from 'react';
import { Menu, X, ArrowUpRight, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export default function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F6]/95 backdrop-blur-md border-b border-[#F2C4BC]/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo */}
        <a
          href="#"
          className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none py-1"
        >
          <img
            src="/assets/aistudio/EOSlogo_nav.png"
            alt="Everything Open Source"
            className="h-10 sm:h-11 w-auto object-contain group-hover:scale-102 transition-transform"
            onError={(e) => {
              e.currentTarget.src = '/assets/aistudio/EOSlogo_4280082d.png';
            }}
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1A1E2D]/80">
          <a
            href="#about"
            className="whitespace-nowrap shrink-0 hover:text-[#FD5D3D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FD5D3D] hover:after:w-full after:transition-all"
          >
            Why We Exist
          </a>
          <a
            href="#programs"
            className="whitespace-nowrap shrink-0 hover:text-[#FD5D3D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FD5D3D] hover:after:w-full after:transition-all"
          >
            Programs
          </a>
          <a
            href="#resources"
            className="whitespace-nowrap shrink-0 hover:text-[#FD5D3D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FD5D3D] hover:after:w-full after:transition-all"
          >
            Resources &amp; Events
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap shrink-0 hover:text-[#FD5D3D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FD5D3D] hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Donate Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://opencollective.com/everything-open-source"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-semibold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-full transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white/20" />
            <span>Donate</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1E2D] hover:text-[#FD5D3D] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F2C4BC] bg-[#FFF8F6] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A1E2D] hover:text-[#FD5D3D]"
          >
            Why We Exist
          </a>
          <a
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A1E2D] hover:text-[#FD5D3D]"
          >
            Programs
          </a>
          <a
            href="#resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A1E2D] hover:text-[#FD5D3D]"
          >
            Resources &amp; Events
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A1E2D] hover:text-[#FD5D3D]"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-[#F2C4BC]/60">
            <a
              href="https://opencollective.com/everything-open-source"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#FD5D3D] rounded-full shadow-sm hover:bg-[#E44B2C] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white/20" />
              <span>Donate</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

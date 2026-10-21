import { ArrowUp, Heart, ExternalLink } from 'lucide-react';
import { COMMUNITY_DATA } from '../data/communityData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#F2C4BC] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#F2C4BC]/60">
          
          {/* Brand Wordmark & Vision */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <img
                src="/assets/aistudio/EOSlogo_nav.png"
                alt="Everything Open Source"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/assets/aistudio/EOSlogo_4280082d.png';
                }}
              />
            </div>
            <p className="text-xs text-[#6E1200] max-w-sm">
              A community united by open knowledge, spotlighting diverse paths into open source.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#1A1E2D]/80">
            <a href="#about" className="hover:text-[#FD5D3D] transition-colors">
              About Us
            </a>
            <a href="#programs" className="hover:text-[#FD5D3D] transition-colors">
              Programs
            </a>
            <a href="#resources" className="hover:text-[#FD5D3D] transition-colors">
              Resources &amp; Events
            </a>
            <a href="#contact" className="hover:text-[#FD5D3D] transition-colors">
              Contact
            </a>
            <a
              href={COMMUNITY_DATA.contact.canvaSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FD5D3D] hover:underline inline-flex items-center gap-1"
            >
              <span>Canva Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#FFF5F3] hover:bg-[#FFDCD5] text-[#6E1200] border border-[#F2C4BC] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Legal Bar matching Canva */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1A1E2D]/70 text-center sm:text-left">
          <p>© 2026 Everything Open Source. All rights reserved.</p>

          <p className="flex items-center justify-center gap-1">
            <span>Built with passion for the global and African open source ecosystem</span>
            <Heart className="w-3.5 h-3.5 text-[#FD5D3D] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}

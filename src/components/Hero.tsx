import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export default function Hero({ onOpenJoinModal }: HeroProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 bg-[#FFF8F6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Cinematic Framed Image Card with Text Overlay */}
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex items-end border border-[#F2C4BC]/60">
          
          {/* Authentic Community Background Photography */}
          <img
            src="/assets/aistudio/eos-img3_da115300.jpg"
            alt="Everything Open Source Community Members"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          />

          {/* Measured Contrast Gradient Scrim for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

          {/* Minimal Text Overlay */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 w-full max-w-4xl text-left">
            
            {/* Subtle Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FEAB9B] mb-3">
              <span>Everything Open Source</span>
              <span aria-hidden="true">·</span>
              <span>Global Community</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight [text-wrap:balance]">
              The Future of Open Source Software
            </h1>

            {/* Minimal Subtitle */}
            <p className="mt-4 text-base sm:text-xl text-white/90 font-medium leading-relaxed max-w-xl">
              A community united by open knowledge, spotlighting diverse paths into open source.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Programs</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenJoinModal}
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 rounded-full transition-all active:scale-95 inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Get Involved</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

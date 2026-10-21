import { COMMUNITY_DATA } from '../data/communityData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FFF8F6] border-y border-[#F2C4BC]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Kicker updated to WHY WE EXIST */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#FD5D3D] block mb-3">
          WHY WE EXIST
        </span>

        {/* Display Headline */}
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1A1E2D] tracking-tight leading-[1.15] [text-wrap:balance]">
          Spotlighting Diverse Paths into Open Source
        </h2>

        {/* Core Narrative from Canva */}
        <p className="mt-6 text-base sm:text-xl text-[#6E1200] leading-relaxed max-w-2xl mx-auto font-medium [text-wrap:balance]">
          {COMMUNITY_DATA.aboutText}
        </p>

        {/* Supporting Editorial Prose */}
        <p className="mt-4 text-sm sm:text-base text-[#1A1E2D]/75 leading-relaxed max-w-2xl mx-auto">
          We believe open source isn't just about code—it's about people. Through hands-on sprints, book sponsorships, and collaborative documentation, we provide the guidance and encouragement newcomers need to take their first steps and make meaningful public contributions.
        </p>

        {/* Metric Strip */}
        <div className="mt-12 pt-8 border-t border-[#F2C4BC]/70 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div>
            <span className="block font-display font-bold text-2xl sm:text-3xl text-[#FD5D3D] tabular-nums">100%</span>
            <span className="text-xs text-[#1A1E2D]/70 font-medium">Free &amp; Open</span>
          </div>
          <div>
            <span className="block font-display font-bold text-2xl sm:text-3xl text-[#FD5D3D] tabular-nums">4</span>
            <span className="text-xs text-[#1A1E2D]/70 font-medium">Flagship Tracks</span>
          </div>
          <div>
            <span className="block font-display font-bold text-2xl sm:text-3xl text-[#FD5D3D] tabular-nums">850+</span>
            <span className="text-xs text-[#1A1E2D]/70 font-medium">Contributors</span>
          </div>
        </div>

      </div>
    </section>
  );
}

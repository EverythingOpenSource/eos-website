import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { COMMUNITY_DATA, ProgramItem } from '../data/communityData';

interface ProgramsProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const [filterTag, setFilterTag] = useState<string>('all');

  const allTags = ['all', 'Beginners', 'Mentorship', 'Books for Techies', 'Social Impact', 'Wikipedia'];

  const filteredPrograms = filterTag === 'all'
    ? COMMUNITY_DATA.programs
    : COMMUNITY_DATA.programs.filter((p) =>
        p.tags.some((t) => t.toLowerCase().includes(filterTag.toLowerCase()))
      );

  return (
    <section id="programs" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Canva copy */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FD5D3D] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Community Initiatives</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#1A1E2D] tracking-tight">
            Programs
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#6E1200] leading-relaxed [text-wrap:balance]">
            Our programs supports our community to explore the various ways of contributing to open source, while providing them with the necessary resources to thrive.
          </p>

          {/* Interactive filter tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#FFF5F3] rounded-2xl border border-[#F2C4BC] max-w-2xl mx-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all capitalize cursor-pointer whitespace-nowrap shrink-0 ${
                  filterTag === tag
                    ? 'bg-[#FD5D3D] text-white shadow-sm'
                    : 'text-[#1A1E2D]/70 hover:text-[#6E1200] hover:bg-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Flagship Program Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredPrograms.map((program, index) => {
            return (
              <div
                key={program.id}
                className="group relative bg-[#FFF8F6] rounded-3xl p-8 sm:p-10 border border-[#F2C4BC]/70 hover:border-[#FD5D3D] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Artwork & Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-3 border border-[#F2C4BC]/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <span className="text-xs font-bold font-mono text-[#6E1200]/70 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E1200] font-semibold mb-3">
                    {program.tags.map((tag, i) => (
                      <span key={i}>
                        {tag}
                        {i < program.tags.length - 1 && <span className="ml-2 text-[#FD5D3D]">·</span>}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl text-[#1A1E2D] group-hover:text-[#6E1200] transition-colors leading-snug">
                    {program.title}
                  </h3>

                  {/* Description directly from Canva */}
                  <p className="mt-3 text-sm sm:text-base text-[#1A1E2D]/80 leading-relaxed">
                    {program.shortDesc}
                  </p>

                  {/* Program Features */}
                  <ul className="mt-6 space-y-2.5">
                    {program.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1E2D]/75">
                        <CheckCircle2 className="w-4 h-4 text-[#FD5D3D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-6 border-t border-[#F2C4BC]/60 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="text-xs sm:text-sm font-bold text-[#FD5D3D] hover:text-[#6E1200] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Curriculum &amp; Sprints</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={program.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white hover:bg-[#FFDCD5] text-[#1A1E2D] hover:text-[#6E1200] transition-colors border border-[#F2C4BC]"
                    title="Open in GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Canva "Explore More" Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/EverythingOpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 text-base font-bold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Explore More on GitHub</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="mt-3 text-xs text-[#6E1200]">
            Browse our repositories, documentation sprints, and working groups.
          </p>
        </div>

      </div>
    </section>
  );
}

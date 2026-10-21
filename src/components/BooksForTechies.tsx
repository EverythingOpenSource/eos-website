import { useState } from 'react';
import { Calendar, ArrowUpRight, CheckCircle2, Clock, FileText, X, Sparkles, Users, BookOpen, Globe2 } from 'lucide-react';

interface CommunityEvent {
  id: string;
  name: string;
  status: 'concluded' | 'upcoming';
  date: string;
  badge: string;
  partner?: string;
  location: string;
  desc: string;
  link?: string;
  hasReport?: boolean;
}

export default function BooksForTechies() {
  const [filter, setFilter] = useState<'all' | 'concluded' | 'upcoming'>('all');
  const [showWikipediaModal, setShowWikipediaModal] = useState(false);

  const events: CommunityEvent[] = [
    {
      id: 'wikipedia',
      name: 'Documenting Africa Open Source on Wikipedia',
      status: 'concluded',
      date: 'April 2025 · 4 Weeks',
      badge: 'Concluded',
      partner: 'Wikipedia User Group Uganda & CHAOSS Africa',
      location: 'Virtual via Discord (7 Countries)',
      desc: 'Intensive 4-week program amplifying African open source innovators on Wikipedia & Wikidata.',
      hasReport: true,
    },
    {
      id: 'ghana-sprint',
      name: 'In-Person Open Source Sprint (Ghana)',
      status: 'concluded',
      date: 'Inaugural Edition',
      badge: 'Concluded',
      partner: 'Everything Open Source Community',
      location: 'Accra, Ghana & Hybrid',
      desc: 'Collaborative in-person hack sprint and building in public cohort.',
      link: 'https://everythingopensource.hashnode.dev/we-did-it-everything-open-source-sprint-a-recap',
    },
    {
      id: 'because-she-can',
      name: 'Getting Experience When You Have None',
      status: 'concluded',
      date: '18th July 2026',
      badge: 'Concluded',
      partner: 'Because She Can',
      location: 'Virtual Workshop',
      desc: 'Workshop on landing your first open source contribution without prior industry credentials.',
    },
    {
      id: 'knust-ug',
      name: 'Intro to Open Source Contribution',
      status: 'upcoming',
      date: 'November 2026',
      badge: 'Upcoming',
      partner: 'KNUST & University of Ghana CompSci Association',
      location: 'Virtual Session',
      desc: 'Hands-on practical session for university computer science students across Ghana.',
      link: 'https://discord.gg/7p2yqaazFJ',
    },
  ];

  const filteredEvents = events.filter((evt) => {
    if (filter === 'all') return true;
    return evt.status === filter;
  });

  return (
    <section id="resources" className="pt-10 sm:pt-14 pb-28 sm:pb-36 lg:pb-44 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal 2-Column Section with strictly equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Column 1: Embedded YouTube Video */}
          <div className="bg-[#FFF8F6] rounded-2xl p-4 sm:p-5 border border-[#F2C4BC]/70 shadow-xs flex flex-col justify-between h-full">
            <div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xs border border-[#F2C4BC]/60 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/Xd3RxZtY8z4?rel=0"
                  title="Building in Public: Inaugural Open Source Sprint Recap (Ghana Edition)"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F2C4BC]/60 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base text-[#1A1E2D] truncate">
                  Inaugural Open Source Sprint Recap
                </h3>
                <p className="text-[11px] text-[#1A1E2D]/60">Ghana Edition · Building in Public</p>
              </div>

              <a
                href="https://www.youtube.com/watch?v=Xd3RxZtY8z4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-full transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <span>Watch on YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Community Events with Concluded / Upcoming Filter */}
          <div className="bg-[#FFF8F6] rounded-2xl p-4 sm:p-5 border border-[#F2C4BC]/70 shadow-xs flex flex-col justify-between h-full">
            <div>
              {/* Header with Title & Minimal Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#F2C4BC]/60 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FD5D3D]" />
                  <h3 className="font-display font-bold text-base text-[#1A1E2D]">
                    Community Events
                  </h3>
                </div>

                {/* Minimal Segment Filter */}
                <div className="inline-flex items-center p-0.5 rounded-lg bg-white border border-[#F2C4BC]/60 text-xs self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setFilter('all')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                      filter === 'all'
                        ? 'bg-[#FD5D3D] text-white shadow-xs font-semibold'
                        : 'text-[#1A1E2D]/60 hover:text-[#1A1E2D]'
                    }`}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter('upcoming')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1 ${
                      filter === 'upcoming'
                        ? 'bg-[#FD5D3D] text-white shadow-xs font-semibold'
                        : 'text-[#1A1E2D]/60 hover:text-[#1A1E2D]'
                    }`}
                  >
                    <span>Upcoming</span>
                    <span className="text-[10px] opacity-80">(1)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter('concluded')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1 ${
                      filter === 'concluded'
                        ? 'bg-[#FD5D3D] text-white shadow-xs font-semibold'
                        : 'text-[#1A1E2D]/60 hover:text-[#1A1E2D]'
                    }`}
                  >
                    <span>Concluded</span>
                    <span className="text-[10px] opacity-80">(3)</span>
                  </button>
                </div>
              </div>

              {/* Event Cards List */}
              <div className="space-y-2">
                {filteredEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-3 rounded-xl bg-white border border-[#F2C4BC]/60 hover:border-[#FD5D3D] transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              evt.status === 'upcoming'
                                ? 'bg-[#FD5D3D]/10 text-[#FD5D3D]'
                                : 'bg-[#1A1E2D]/5 text-[#1A1E2D]/70'
                            }`}
                          >
                            {evt.status === 'upcoming' ? (
                              <Clock className="w-2.5 h-2.5" />
                            ) : (
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                            )}
                            <span>{evt.badge}</span>
                          </span>
                          <span className="text-[11px] font-semibold text-[#FD5D3D]">
                            {evt.date}
                          </span>
                        </div>

                        <h4 className="font-semibold text-xs sm:text-sm text-[#1A1E2D] group-hover:text-[#6E1200] transition-colors">
                          {evt.name}
                        </h4>

                        <p className="text-[11px] text-[#1A1E2D]/65 mt-0.5 line-clamp-1">
                          {evt.partner ? `${evt.partner} · ` : ''}{evt.location}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="shrink-0 self-center pl-2">
                        {evt.hasReport ? (
                          <button
                            type="button"
                            onClick={() => setShowWikipediaModal(true)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-[#FD5D3D] hover:text-white bg-[#FD5D3D]/10 hover:bg-[#FD5D3D] rounded-lg transition-colors cursor-pointer"
                          >
                            <FileText className="w-3 h-3" />
                            <span>Report</span>
                          </button>
                        ) : evt.link ? (
                          <a
                            href={evt.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-[#FD5D3D] hover:text-white bg-[#FD5D3D]/10 hover:bg-[#FD5D3D] rounded-lg transition-colors"
                          >
                            <span>{evt.status === 'upcoming' ? 'Join' : 'Recap'}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/40" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle card bottom caption */}
            <div className="mt-3 pt-2.5 border-t border-[#F2C4BC]/60 flex items-center justify-between text-[11px] text-[#1A1E2D]/60">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#FD5D3D]" />
                <span>Impact-driven community initiatives</span>
              </span>
              <a
                href="https://discord.gg/7p2yqaazFJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FD5D3D] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                <span>Join community</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Wikipedia Initiative Report Modal */}
      {showWikipediaModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowWikipediaModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 border border-[#F2C4BC] shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowWikipediaModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FFF5F3] text-slate-400 hover:text-[#FD5D3D] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FD5D3D] bg-[#FD5D3D]/10 px-2.5 py-0.5 rounded-full mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Program Report · Concluded</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1E2D]">
                African Open Source Wikipedia Initiative
              </h3>
              <p className="text-xs text-[#1A1E2D]/65 mt-1">
                Duration: April 5th – April 26th, 2025 · Everything Open Source & Wikipedia User Group Uganda · Partner: CHAOSS Africa
              </p>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
              <div className="p-3 rounded-xl bg-[#FFF8F6] border border-[#F2C4BC]/60">
                <div className="text-xl font-display font-bold text-[#FD5D3D]">48.7k+</div>
                <div className="text-[11px] text-[#1A1E2D]/70 font-medium">Article Views</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F6] border border-[#F2C4BC]/60">
                <div className="text-xl font-display font-bold text-[#FD5D3D]">106</div>
                <div className="text-[11px] text-[#1A1E2D]/70 font-medium">Articles Created</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F6] border border-[#F2C4BC]/60">
                <div className="text-xl font-display font-bold text-[#FD5D3D]">406</div>
                <div className="text-[11px] text-[#1A1E2D]/70 font-medium">Articles Edited</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F6] border border-[#F2C4BC]/60">
                <div className="text-xl font-display font-bold text-[#FD5D3D]">155k+</div>
                <div className="text-[11px] text-[#1A1E2D]/70 font-medium">Words Added</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F6] border border-[#F2C4BC]/60">
                <div className="text-xl font-display font-bold text-[#FD5D3D]">45</div>
                <div className="text-[11px] text-[#1A1E2D]/70 font-medium">Participants (7 Nations)</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F6] border border-[#F2C4BC]/60">
                <div className="text-xl font-display font-bold text-[#FD5D3D]">24</div>
                <div className="text-[11px] text-[#1A1E2D]/70 font-medium">New Wikipedia Editors</div>
              </div>
            </div>

            {/* Summary details */}
            <div className="space-y-3 text-xs sm:text-sm text-[#1A1E2D]/80 leading-relaxed border-t border-[#F2C4BC]/50 pt-4">
              <p>
                The African Open Source Wikipedia Initiative was an intensive four-week virtual campaign bridging the representation gap for African tech innovators on global knowledge platforms like Wikipedia and Wikidata.
              </p>
              <div className="p-3 rounded-xl bg-[#FFF5F3] border border-[#F2C4BC]/60 space-y-1.5 text-xs">
                <div className="font-semibold text-[#6E1200]">Key Deliverables:</div>
                <ul className="list-disc list-inside space-y-1 text-[#1A1E2D]/80">
                  <li>3 comprehensive Wikipedia articles fully approved</li>
                  <li>22 new Wikidata entries created for African open-source leaders (e.g. Marlene Mhangami, Samson Goddy, Angela Oduor Lungati)</li>
                  <li>13 Wikidata entries for vital organizations including Women in Technology Uganda, CHAOSS, and Python Namibia</li>
                  <li>97 media files contributed to Wikimedia Commons</li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-[#F2C4BC]/50 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowWikipediaModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-xl transition-colors cursor-pointer"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

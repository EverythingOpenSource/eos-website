import { Calendar, ArrowUpRight } from 'lucide-react';

export default function BooksForTechies() {
  const upcomingEvents = [
    {
      name: "Open Source Festival Africa",
      date: "Upcoming Flagship",
      location: "Lagos & Virtual",
      link: "https://github.com/EverythingOpenSource/open-source-events",
    },
    {
      name: "Wikipedia Africa Tech Edit-a-thon",
      date: "Monthly Cohort",
      location: "Virtual",
      link: "https://github.com/EverythingOpenSource/open-source-communities-in-africa",
    },
    {
      name: "Everything Open Source Sprint",
      date: "Quarterly",
      location: "In-Person & Hybrid",
      link: "https://github.com/EverythingOpenSource/open-source-sprints",
    },
    {
      name: "EOS Community Hours on X Spaces",
      date: "Bi-Weekly Thursdays",
      location: "Live on X @everything_oss",
      link: "https://x.com/everything_oss?s=21",
    },
  ];

  return (
    <section id="resources" className="pt-10 sm:pt-14 pb-28 sm:pb-36 lg:pb-44 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Column 1: Embedded YouTube Video */}
          <div className="bg-[#FFF8F6] rounded-2xl p-4 sm:p-5 border border-[#F2C4BC]/70 shadow-xs">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xs border border-[#F2C4BC]/60 bg-black">
              <iframe
                src="https://www.youtube.com/embed/Xd3RxZtY8z4?rel=0"
                title="Building in Public: Inaugural Open Source Sprint Recap (Ghana Edition)"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="mt-3.5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base text-[#1A1E2D] truncate">
                  Inaugural Open Source Sprint Recap
                </h3>
                <p className="text-[11px] text-[#1A1E2D]/60">Ghana Edition</p>
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

          {/* Column 2: Open Source Events */}
          <div className="bg-[#FFF8F6] rounded-2xl p-4 sm:p-5 border border-[#F2C4BC]/70 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F2C4BC]/60 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FD5D3D]" />
                  <h3 className="font-display font-bold text-base text-[#1A1E2D]">
                    Open Source Events
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                {upcomingEvents.map((evt, idx) => (
                  <a
                    key={idx}
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white border border-[#F2C4BC]/60 hover:border-[#FD5D3D] transition-colors group"
                  >
                    <div className="min-w-0 pr-2">
                      <h4 className="font-medium text-xs sm:text-sm text-[#1A1E2D] group-hover:text-[#6E1200] transition-colors truncate">
                        {evt.name}
                      </h4>
                      <p className="text-[11px] text-[#1A1E2D]/60 flex items-center gap-1.5 mt-0.5">
                        <span className="text-[#FD5D3D] font-semibold">{evt.date}</span>
                        <span>·</span>
                        <span>{evt.location}</span>
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1A1E2D]/40 group-hover:text-[#FD5D3D] shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Submit or View All Events on GitHub */}
            <div className="mt-4 pt-3 border-t border-[#F2C4BC]/60">
              <a
                href="https://github.com/EverythingOpenSource/open-source-events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-[#FD5D3D] hover:text-white bg-white hover:bg-[#FD5D3D] border border-[#F2C4BC] hover:border-[#FD5D3D] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Submit or view all events on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { Sparkles, Calendar, ExternalLink, ArrowUpRight, Play, Youtube, MapPin, Clock } from 'lucide-react';

export default function BooksForTechies() {
  const upcomingEvents = [
    {
      name: "Open Source Festival Africa",
      type: "Annual Conference",
      location: "Lagos, Nigeria & Virtual",
      date: "Upcoming Flagship",
      description: "Gathering open source maintainers, developers, designers, and advocates from across Africa and beyond.",
      link: "https://github.com/EverythingOpenSource/open-source-events",
    },
    {
      name: "Wikipedia Africa Tech Edit-a-thon",
      type: "Documentation Sprint",
      location: "Virtual Hands-on Session",
      date: "Monthly Cohort",
      description: "Documenting African open source projects, tools, and pioneering tech leaders on Wikipedia.",
      link: "https://github.com/EverythingOpenSource/open-source-communities-in-africa",
    },
    {
      name: "Everything Open Source Community Sprint",
      type: "Hands-on Sprint",
      location: "In-Person & Hybrid",
      date: "Quarterly Sprint",
      description: "Collaborative building session for first-time contributors, bug fixes, and documentation improvements.",
      link: "https://github.com/EverythingOpenSource/open-source-sprints",
    },
    {
      name: "EOS Community Hours on X Spaces",
      type: "Live Audio AMA",
      location: "X @everything_oss",
      date: "Bi-Weekly Thursdays",
      description: "Live audio conversations discussing project maintenance, developer advocacy, and open source careers.",
      link: "https://x.com/everything_oss?s=21",
    },
  ];

  return (
    <section id="resources" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FD5D3D] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Community Impact in Action</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1E2D] tracking-tight">
            Community Impact in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E1200] leading-relaxed [text-wrap:balance]">
            Witness the energy of our community sprints, discover upcoming open source gatherings, and find your place in the movement.
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: Embedded YouTube Video */}
          <div className="bg-[#FFF8F6] rounded-3xl p-6 sm:p-8 border border-[#F2C4BC]/70 shadow-sm hover:border-[#FD5D3D] transition-all flex flex-col justify-between">
            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FD5D3D]/10 text-[#FD5D3D] flex items-center justify-center shrink-0">
                    <Youtube className="w-5 h-5 text-[#FD5D3D]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FD5D3D] block">
                      Sprint Spotlight
                    </span>
                    <span className="text-xs text-[#1A1E2D]/60 font-medium">
                      Everything Open Source
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=Xd3RxZtY8z4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FD5D3D] hover:text-[#6E1200] bg-white px-3 py-1.5 rounded-full border border-[#F2C4BC] hover:border-[#FD5D3D] transition-colors shrink-0"
                  title="Open video on YouTube"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Video Title */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1E2D] leading-snug mb-2">
                Building in Public: Inaugural Open Source Sprint Recap
              </h3>
              <p className="text-xs sm:text-sm text-[#6E1200] font-medium mb-5">
                Ghana Edition · Hands-on Contributor Showcase
              </p>

              {/* Embedded YouTube Video Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-[#F2C4BC]/60 bg-black group">
                <iframe
                  src="https://www.youtube.com/embed/Xd3RxZtY8z4?rel=0"
                  title="Building in Public: Inaugural Open Source Sprint Recap (Ghana Edition)"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Video description */}
              <p className="mt-4 text-xs sm:text-sm text-[#1A1E2D]/80 leading-relaxed">
                Highlights from our inaugural open source sprint in Ghana, where developers, technical writers, and designers came together to make real pull requests and foster open collaboration.
              </p>
            </div>

            {/* Direct Link to New Page Button */}
            <div className="mt-6 pt-5 border-t border-[#F2C4BC]/60">
              <a
                href="https://www.youtube.com/watch?v=Xd3RxZtY8z4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 text-xs sm:text-sm font-bold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-2xl transition-all shadow-sm hover:shadow active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Video on YouTube</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Open Source Events */}
          <div className="bg-[#FFF8F6] rounded-3xl p-6 sm:p-8 border border-[#F2C4BC]/70 shadow-sm hover:border-[#FD5D3D] transition-all flex flex-col justify-between">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#F2C4BC]/60 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFDCD5] flex items-center justify-center text-[#FD5D3D] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1E2D]">
                      Open Source Events
                    </h3>
                    <p className="text-xs text-[#6E1200] font-medium">
                      Conferences, sprints &amp; meetups
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-1 bg-white text-[#FD5D3D] rounded-full border border-[#F2C4BC] shrink-0">
                  Community Calendar
                </span>
              </div>

              {/* Events List */}
              <div className="space-y-3.5">
                {upcomingEvents.map((evt, idx) => (
                  <a
                    key={idx}
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 sm:p-4 bg-white rounded-2xl border border-[#F2C4BC]/60 hover:border-[#FD5D3D] hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FD5D3D] bg-[#FFF5F3] px-2 py-0.5 rounded-md border border-[#F2C4BC]/60">
                        <Clock className="w-3 h-3" />
                        <span>{evt.date}</span>
                      </span>

                      <div className="flex items-center gap-1 text-[11px] font-semibold text-[#1A1E2D]/50 group-hover:text-[#FD5D3D] transition-colors">
                        <span>{evt.type}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-sm sm:text-base text-[#1A1E2D] group-hover:text-[#6E1200] transition-colors leading-snug">
                      {evt.name}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-[#1A1E2D]/60 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FD5D3D] shrink-0" />
                      <span>{evt.location}</span>
                    </div>

                    <p className="text-xs text-[#1A1E2D]/75 mt-2 line-clamp-2 leading-relaxed">
                      {evt.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Submit or View All Events on GitHub */}
            <div className="mt-6 pt-5 border-t border-[#F2C4BC]/60 space-y-2">
              <a
                href="https://github.com/EverythingOpenSource/open-source-events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 text-xs sm:text-sm font-bold text-[#FD5D3D] hover:text-white bg-white hover:bg-[#FD5D3D] border border-[#F2C4BC] hover:border-[#FD5D3D] rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Submit or view all events on GitHub</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <p className="text-center text-[11px] text-[#6E1200]">
                Community-curated repository of open source opportunities worldwide.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

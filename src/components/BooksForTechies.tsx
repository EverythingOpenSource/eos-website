import { useState } from 'react';
import { BookOpen, Calendar, Radio, Sparkles, Heart, ExternalLink, ArrowRight, Check } from 'lucide-react';

export default function BooksForTechies() {
  const [suggestBookOpen, setSuggestBookOpen] = useState(false);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sampleBooks = [
    {
      title: "Working in Public: The Making and Maintenance of Open Source",
      author: "Nadia Eghbal",
      category: "OSS Strategy",
      status: "Available for Students",
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "Systems & Architecture",
      status: "Sponsored & Dispatched",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      category: "Software Craftsmanship",
      status: "Available for Students",
    },
    {
      title: "Writing Great Documentation",
      author: "Open Source Collective",
      category: "Technical Writing",
      status: "Digital Edition Free",
    },
  ];

  const upcomingEvents = [
    {
      name: "Open Source Festival Africa",
      location: "Lagos, Nigeria & Virtual",
      date: "Upcoming Sprint",
      link: "https://github.com/EverythingOpenSource/open-source-events",
    },
    {
      name: "Wikipedia Africa Tech Edit-a-thon",
      location: "Virtual Hands-on Session",
      date: "Monthly Cohort",
      link: "https://github.com/EverythingOpenSource/open-source-communities-in-africa",
    },
    {
      name: "Everything Open Source Twitter/X Space",
      location: "Live on X @everything_oss",
      date: "Bi-Weekly Thursdays",
      link: "https://x.com/everything_oss?s=21",
    },
  ];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookTitle.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setBookTitle('');
        setBookAuthor('');
        setSubmitted(false);
        setSuggestBookOpen(false);
      }, 2500);
    }
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FD5D3D] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Community Impact in Action</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1E2D] tracking-tight">
            Books for Techies &amp; Knowledge Commons
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E1200] leading-relaxed">
            Sending physical and digital books to students, self-taught learners, and early-career developers in Africa while curating events and hosting discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Books for Techies Catalog */}
          <div className="lg:col-span-7 bg-[#FFF8F6] rounded-3xl p-8 sm:p-10 border border-[#F2C4BC]/70 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F2C4BC]/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFDCD5] flex items-center justify-center text-[#FD5D3D]">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1E2D]">
                      Books for Techies
                    </h3>
                    <p className="text-xs text-[#6E1200] font-medium">
                      Direct Book Sponsorship Program
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSuggestBookOpen(!suggestBookOpen)}
                  className="px-4 py-2 text-xs font-bold text-[#FD5D3D] bg-white hover:bg-[#FFDCD5] border border-[#F2C4BC] rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  {suggestBookOpen ? 'Close Form' : '+ Recommend Book'}
                </button>
              </div>

              {/* Suggest Book Form */}
              {suggestBookOpen && (
                <form onSubmit={handleBookSubmit} className="mt-6 p-5 bg-white rounded-2xl border border-[#F2C4BC] animate-in fade-in duration-200">
                  <h4 className="text-sm font-bold text-[#1A1E2D] mb-3">
                    Recommend a Book for the Community
                  </h4>
                  {submitted ? (
                    <div className="p-3 bg-[#F2FAF6] text-[#2E7D32] text-xs font-semibold rounded-xl flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Thank you! Your recommendation has been added to the community queue.</span>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Book title (e.g. Designing Data-Intensive Applications)"
                          value={bookTitle}
                          onChange={(e) => setBookTitle(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#F2C4BC] focus:outline-none focus:ring-2 focus:ring-[#FD5D3D]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Author name (optional)"
                          value={bookAuthor}
                          onChange={(e) => setBookAuthor(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#F2C4BC] focus:outline-none focus:ring-2 focus:ring-[#FD5D3D]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-2 text-xs font-bold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-xl transition-all cursor-pointer"
                      >
                        Submit Recommendation
                      </button>
                    </div>
                  )}
                </form>
              )}

              {/* Sample Book List */}
              <div className="mt-6 space-y-3">
                {sampleBooks.map((book, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-2xl border border-[#F2C4BC]/60 flex items-center justify-between gap-4 hover:border-[#FD5D3D] transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-[#6E1200] block mb-0.5">
                        {book.category}
                      </span>
                      <h4 className="font-display font-bold text-sm text-[#1A1E2D]">
                        {book.title}
                      </h4>
                      <p className="text-xs text-[#1A1E2D]/60">{book.author}</p>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 bg-[#FFF5F3] text-[#FD5D3D] rounded-lg border border-[#F2C4BC] shrink-0">
                      {book.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F2C4BC]/60 flex items-center justify-between text-xs text-[#6E1200]">
              <span className="font-medium">Are you a publisher or maintainer looking to donate copies?</span>
              <a
                href="mailto:everythingopensource@gmail.com?subject=Books for Techies Donation"
                className="font-bold text-[#FD5D3D] hover:underline whitespace-nowrap ml-2"
              >
                Donate Books →
              </a>
            </div>
          </div>

          {/* Events & X Spaces Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Events Directory Card */}
            <div className="bg-[#FFF8F6] rounded-3xl p-8 border border-[#F2C4BC]/70 shadow-sm">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F2C4BC]/60 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FFDCD5] flex items-center justify-center text-[#FD5D3D]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#1A1E2D]">
                    Open Source Events
                  </h3>
                  <p className="text-xs text-[#6E1200]">Conferences, sprints &amp; meetups</p>
                </div>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt, idx) => (
                  <a
                    key={idx}
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 bg-white rounded-xl border border-[#F2C4BC]/60 hover:border-[#FD5D3D] transition-colors group"
                  >
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#FD5D3D] mb-1">
                      <span>{evt.date}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FD5D3D] transition-colors" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#1A1E2D] group-hover:text-[#6E1200] transition-colors">
                      {evt.name}
                    </h4>
                    <p className="text-xs text-[#1A1E2D]/60 mt-0.5">{evt.location}</p>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2C4BC]/60 text-center">
                <a
                  href="https://github.com/EverythingOpenSource/open-source-events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FD5D3D] hover:text-[#6E1200] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Submit or view all events on GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* X Spaces Card */}
            <div className="bg-[#FFF8F6] rounded-3xl p-8 border border-[#F2C4BC]/70 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#000000] text-white flex items-center justify-center">
                  <Radio className="w-5 h-5 text-[#FD5D3D]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#1A1E2D]">
                    X Spaces Community Hours
                  </h3>
                  <p className="text-xs text-[#6E1200]">Live audio discussions &amp; AMA sessions</p>
                </div>
              </div>

              <p className="text-xs text-[#1A1E2D]/75 leading-relaxed">
                Hosted regularly on X (formerly Twitter) discussing getting started, community leadership, and career growth in open source.
              </p>

              <div className="mt-5">
                <a
                  href="https://x.com/everything_oss?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#000000] hover:bg-neutral-800 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Follow @everything_oss on X</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

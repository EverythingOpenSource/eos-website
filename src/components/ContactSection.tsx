import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { COMMUNITY_DATA } from '../data/communityData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(COMMUNITY_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const socialChannels = [
    {
      name: 'Twitter / X',
      handle: '@everything_oss',
      url: 'https://x.com/everything_oss?s=21',
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@everything_opensource',
      url: 'https://www.instagram.com/everything_opensource/',
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.406-8.445a1.17 1.17 0 1 0-2.34 0 1.17 1.17 0 0 0 2.34 0z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      handle: '@EverythingOpenSource',
      url: 'https://www.linkedin.com/company/everything-open-source/?viewAsMember=true',
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.72.77-1.72 1.72 0 .96.77 1.73 1.72 1.73.96 0 1.73-.77 1.73-1.73 0-.95-.77-1.72-1.73-1.72z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      handle: '@EverythingOpenSource',
      url: 'https://github.com/EverythingOpenSource',
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="border-t border-[#F2C4BC]">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch">
        
        {/* Column 1: White Panel - COMMUNITY */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F2C4BC]/70">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FD5D3D] block mb-4">
              COMMUNITY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1E2D] tracking-tight mb-5">
              Join the Community
            </h2>
            <p className="text-sm sm:text-base text-[#1A1E2D]/80 leading-relaxed max-w-sm">
              Become part of a vibrant network of people passionate about open source and technology. Access resources, opportunities, and a community that actually shows up for you.
            </p>
          </div>

          <div className="pt-12 sm:pt-16">
            <a
              href="https://discord.gg/7p2yqaazFJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-[#1A1E2D] hover:text-[#FD5D3D] transition-colors pb-1 border-b-2 border-[#FD5D3D] cursor-pointer"
            >
              <span>Join the community</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Column 2: Warm Peach Blush Panel - FOLLOW ALONG */}
        <div className="bg-[#FFF4F1] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F2C4BC]/70">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6E1200] block mb-4">
              FOLLOW ALONG
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1E2D] tracking-tight mb-5">
              Social media
            </h2>
            <p className="text-sm sm:text-base text-[#6E1200]/80 leading-relaxed max-w-sm mb-10">
              We post about programs, events, opportunities, and community wins across all our channels.
            </p>

            {/* Social rows list */}
            <div className="divide-y divide-[#F2C4BC]/70">
              {socialChannels.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 flex items-center justify-between text-sm text-[#1A1E2D] hover:text-[#FD5D3D] group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#6E1200] group-hover:text-[#FD5D3D] transition-colors">
                      {soc.icon}
                    </span>
                    <span className="font-medium">{soc.name}</span>
                  </div>
                  <span className="text-xs text-[#6E1200]/70 group-hover:text-[#FD5D3D] transition-colors">
                    {soc.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8" />
        </div>

        {/* Column 3: Signature Deep Maroon Panel - SAY HELLO */}
        <div className="bg-[#6E1200] p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-white">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FEAB9B] block mb-4">
              SAY HELLO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
              Send us an email
            </h2>
            <p className="text-sm sm:text-base text-[#FFDCD5]/90 leading-relaxed max-w-sm">
              Ideas, collaborations, partnerships, questions — we read everything and reply as soon as we can.
            </p>
          </div>

          <div className="pt-12 sm:pt-16">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${COMMUNITY_DATA.contact.email}`}
                className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-white hover:text-[#FFDCD5] transition-colors pb-1 border-b-2 border-[#FD5D3D] hover:border-white break-all"
              >
                <span>{COMMUNITY_DATA.contact.email}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="p-1.5 text-[#FEAB9B] hover:text-white transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#7EC0A4]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copiedEmail && (
              <span className="text-xs text-[#FEAB9B] block mt-1.5 font-medium">
                Email copied to clipboard!
              </span>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

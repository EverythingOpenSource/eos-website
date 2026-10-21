import { useState } from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Beginner / Student');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
      setTimeout(() => {
        // keep feedback open
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#F2C4BC] shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#FFF5F3] text-slate-400 hover:text-[#FD5D3D] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#FD5D3D] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Join the Movement</span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1E2D]">
          Get Involved in Everything Open Source
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-[#6E1200] leading-relaxed">
          Be the first to hear about upcoming sprints, books giveaways, Twitter/X spaces, and mentorship openings.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#F2FAF6] text-[#7EC0A4] flex items-center justify-center mx-auto border border-[#7EC0A4]/40">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-display font-bold text-xl text-[#1A1E2D]">
              You're in! Welcome aboard.
            </h4>
            <p className="text-xs text-[#1A1E2D]/70 max-w-sm mx-auto">
              We've registered your interest for our upcoming cohort. Check your inbox soon for next steps and our community Discord/X links!
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-full transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1E2D] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Adebayo Ogunlesi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#F2C4BC] focus:outline-none focus:ring-2 focus:ring-[#FD5D3D] bg-[#FFF8F6]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A1E2D] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="adebayo@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#F2C4BC] focus:outline-none focus:ring-2 focus:ring-[#FD5D3D] bg-[#FFF8F6]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A1E2D] mb-1">
                Your Current Role / Level
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#F2C4BC] focus:outline-none focus:ring-2 focus:ring-[#FD5D3D] bg-[#FFF8F6]/40 cursor-pointer"
              >
                <option value="Beginner / Student">Beginner / Student / Recent Graduate</option>
                <option value="Self-Taught Developer">Self-Taught Builder</option>
                <option value="Designer / Creative">Product / UI / UX Designer</option>
                <option value="Technical Writer">Writer / Documentation Enthusiast</option>
                <option value="Senior Maintainer">Senior Maintainer / Potential Mentor</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] rounded-full transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Community Sprints</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

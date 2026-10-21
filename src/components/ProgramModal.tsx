import { X, CheckCircle2, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { ProgramItem } from '../data/communityData';

interface ProgramModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

export default function ProgramModal({ program, onClose, onOpenJoinModal }: ProgramModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#F2C4BC] shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#FFF5F3] text-slate-400 hover:text-[#FD5D3D] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-5 pr-8">
          <div className="w-16 h-16 rounded-2xl bg-[#FFDCD5] p-2 flex items-center justify-center shrink-0 border border-[#F2C4BC]">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#FD5D3D] mb-1">
              <span>Community Program</span>
              <span aria-hidden="true">·</span>
              <span>100% Free</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-[#1A1E2D]">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 text-sm text-[#1A1E2D]/80 leading-relaxed space-y-3">
          <p className="font-medium text-[#6E1200]">{program.shortDesc}</p>
          <p>{program.fullDesc}</p>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {program.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#FFF5F3] text-[#6E1200] text-xs font-bold rounded-lg border border-[#F2C4BC]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key Features & Roadmap */}
        <div className="mt-6 pt-6 border-t border-[#F2C4BC]/60">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E1200] mb-3">
            What You Receive In This Program
          </h4>
          <ul className="space-y-2.5">
            {program.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#1A1E2D]">
                <CheckCircle2 className="w-4 h-4 text-[#FD5D3D] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-6 border-t border-[#F2C4BC]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={program.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-[#1A1E2D] bg-[#FFF5F3] hover:bg-[#FFDCD5] border border-[#F2C4BC] flex items-center justify-center gap-2 transition-colors"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenJoinModal();
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-white bg-[#FD5D3D] hover:bg-[#E44B2C] flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <span>Register for Next Cohort</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

import { ImageIcon } from "lucide-react";

type Ratio = "16/9" | "4/3" | "1/1" | "21/9" | "3/4";
type Variant = "navy" | "cream" | "gold-soft";

interface ImagePlaceholderProps {
  label: string;
  hint?: string;
  ratio?: Ratio;
  variant?: Variant;
  className?: string;
}

const ratioClass: Record<Ratio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
  "3/4": "aspect-[3/4]"
};

const variantClass: Record<Variant, string> = {
  navy: "bg-gradient-to-br from-[var(--color-brand-navy)] to-[var(--color-brand-navy-dark)] text-white border-[var(--color-brand-navy)]",
  cream: "bg-[var(--color-brand-cream)] text-[var(--color-brand-navy)] border-zinc-200",
  "gold-soft": "bg-gradient-to-br from-[var(--color-brand-gold-soft)]/30 to-[var(--color-brand-gold-soft)]/10 text-[var(--color-brand-navy)] border-[var(--color-brand-gold)]/30"
};

export default function ImagePlaceholder({ label, hint, ratio = "16/9", variant = "cream", className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl border-2 border-dashed flex items-center justify-center ${ratioClass[ratio]} ${variantClass[variant]} ${className}`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,currentColor_0%,transparent_50%)]" />
      <div className="relative text-center px-6 py-8 max-w-md">
        <ImageIcon className="w-10 h-10 mx-auto mb-4 opacity-60" />
        <div className="text-xs uppercase tracking-widest font-semibold opacity-70 mb-2">Spațiu imagine</div>
        <div className="text-base sm:text-lg font-display leading-tight mb-2">{label}</div>
        {hint && <div className="text-xs opacity-65 leading-relaxed">{hint}</div>}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

const AMBER = "#f59e0b";

// Tyre + amber alloy-wheel emblem. `light` swaps the dark rubber to white for dark backgrounds.
export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  const dark = light ? "#ffffff" : "#0d1b3e";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Jai Ganesh Tyres"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* tread ring */}
      <circle cx="32" cy="32" r="31" fill="none" stroke={dark} strokeWidth="2.6" strokeDasharray="2.2 3.2" />
      {/* tyre rubber */}
      <circle cx="32" cy="32" r="27.5" fill="none" stroke={dark} strokeWidth="8" />
      {/* alloy rim */}
      <circle cx="32" cy="32" r="18" fill={AMBER} />
      <circle cx="32" cy="32" r="18" fill="none" stroke={dark} strokeWidth="1.5" />
      {/* alloy spoke holes */}
      <g fill={dark}>
        <circle cx="32" cy="22" r="3.4" />
        <circle cx="41.5" cy="28.9" r="3.4" />
        <circle cx="37.9" cy="40.1" r="3.4" />
        <circle cx="26.1" cy="40.1" r="3.4" />
        <circle cx="22.5" cy="28.9" r="3.4" />
      </g>
      {/* hub */}
      <circle cx="32" cy="32" r="5.5" fill={dark} />
      <circle cx="32" cy="32" r="2" fill={AMBER} />
    </svg>
  );
}

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-10 w-10 shrink-0" light={light} />
      <span className="font-display text-lg font-bold leading-none">
        <span className={light ? "text-white" : "text-brand-900"}>Jai Ganesh </span>
        <span className="text-accent-500">Tyres</span>
        <span className={cn("mt-0.5 block text-[11px] font-medium", light ? "text-slate-300" : "text-muted")}>
          Pune · 2 Branches
        </span>
      </span>
    </span>
  );
}

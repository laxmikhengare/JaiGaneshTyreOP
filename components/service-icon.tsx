import {
  CircleDot,
  Crosshair,
  Disc3,
  Wrench,
  Wind,
  Droplets,
  RotateCw,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  CircleDot,
  Crosshair,
  Disc3,
  Wrench,
  Wind,
  Droplets,
  RotateCw,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? CircleDot;
  return <Icon className={className} aria-hidden />;
}

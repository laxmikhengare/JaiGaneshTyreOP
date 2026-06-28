import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  accent: "bg-accent-500 text-brand-900 hover:bg-accent-400",
  outline: "border border-brand-600 text-brand-700 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50",
  whatsapp: "bg-[#25D366] text-white hover:brightness-95",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", size = "md", className, href, children, ...rest }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me");
    if (external) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-20", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-600">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-bold text-balance text-brand-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  );
}

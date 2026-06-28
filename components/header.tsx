"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { site, nav } from "@/content/site";
import { Button } from "@/components/ui/button";
import { telLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 font-display text-lg font-bold text-white">
            JG
          </span>
          <span className="font-display text-lg font-bold leading-none text-brand-900">
            {site.name}
            <span className="block text-[11px] font-medium text-muted">Pune · 2 Branches</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <Button href={telLink(site.primaryPhone)} size="sm" className="ml-2">
            <Phone className="h-4 w-4" /> Call now
          </Button>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-brand-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <nav className="space-y-1 border-t border-slate-200 px-4 py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/book" className="mt-2 w-full" onClick={() => setOpen(false)}>
            Book a service
          </Button>
        </nav>
      </div>
    </header>
  );
}

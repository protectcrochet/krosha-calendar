import { ReactNode } from "react";

export function Card({ title, value, subtitle }: { title: string; value: string; subtitle?: string }) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow-sm border border-rose/10">
      <p className="text-sm text-mauve">{title}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
      {subtitle && <p className="mt-1 text-xs text-mauve">{subtitle}</p>}
    </article>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

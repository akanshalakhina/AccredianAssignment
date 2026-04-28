"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PROGRAMS } from "@/lib/data";

const TAG_COLORS = {
  "Most Popular": "blue",
  "Trending":     "teal",
  "New":          "green",
  "Hot":          "orange",
} as const;

const LEVELS = ["All", "Advanced", "Intermediate", "Beginner"] as const;

export default function ProgramsSection() {
  const [level, setLevel] = useState<string>("All");

  const visible = level === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.level === level);

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="section-label">Our Programs</span>
            <h2 className="text-heading text-slate-900">
              Built for{" "}
              <span className="gradient-text">enterprise scale</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 flex-wrap shrink-0">
            {LEVELS.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                  level === l
                    ? "bg-[#1A56DB] text-white border-[#1A56DB]"
                    : "text-slate-600 border-slate-200 hover:border-[#1A56DB] hover:text-[#1A56DB]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {visible.map((program) => (
            <article key={program.id} className="card p-6 flex flex-col">

              {/* Top row */}
              <div className="flex items-center justify-between mb-5">
                <Badge
                  label={program.tag}
                  color={TAG_COLORS[program.tag as keyof typeof TAG_COLORS] ?? "gray"}
                />
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                  {program.level}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-[15px] leading-snug mb-2 flex-1">
                {program.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{program.description}</p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-5 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {program.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  Certificate
                </span>
              </div>

              <Button variant="outline" size="sm" href="#contact" className="w-full justify-center text-xs">
                Learn More →
              </Button>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" size="md" href="#contact">View All Programs</Button>
        </div>
      </div>
    </section>
  );
}

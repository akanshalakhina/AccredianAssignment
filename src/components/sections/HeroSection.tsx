import Button from "@/components/ui/Button";
import { HERO_STATS } from "@/lib/data";
import type { Stat } from "@/types";

function StatItem({ value, suffix, label }: Stat) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl md:text-3xl font-extrabold text-white leading-none">
        {value}<span className="text-teal-300">{suffix}</span>
      </span>
      <span className="text-xs text-blue-200 mt-1.5 font-medium">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero-bg pt-16">

      {/* ── Subtle mesh pattern overlay ─────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Glow orbs ───────────────────────────────── */}
      <div aria-hidden className="absolute top-[-120px] right-[-100px] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div aria-hidden className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-teal-400/20 blur-[80px]" />

      <div className="relative section-container py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left copy ───────────────────────────── */}
          <div className="animate-fade-in-up max-w-xl">

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold mb-7 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-slow" />
              India&apos;s #1 Enterprise L&amp;D Platform
            </div>

            <h1 className="text-display text-white mb-5">
              Upskill Your{" "}
              <span className="text-teal-300">Workforce</span>{" "}
              with IIT-Backed Programs
            </h1>

            <p className="text-blue-100/90 text-lg leading-relaxed mb-8">
              Deliver world-class certifications to your team — with real-time
              analytics, a dedicated account manager, and zero disruption to
              your operations.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="white" size="lg" href="#contact">
                Request a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button
                size="lg"
                href="#programs"
                className="border border-white/25 bg-transparent text-white hover:bg-white/10 rounded-lg"
              >
                Browse Programs
              </Button>
            </div>

            <p className="mt-6 text-blue-200 text-sm">
              Trusted by <strong className="text-white font-semibold">500+ organizations</strong> including Fortune 500 companies
            </p>
          </div>

          {/* ── Right card ──────────────────────────── */}
          <div className="animate-fade-in-up delay-200 hidden lg:block">
            <div className="relative max-w-sm ml-auto">

              {/* Main glass card */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-7">

                {/* Card header */}
                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-teal-400/20 flex items-center justify-center text-xl shrink-0">
                    🎓
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-snug">
                      Executive Program in Data Science & AI
                    </p>
                    <p className="text-blue-200 text-xs mt-0.5">IIT Guwahati · Certified</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {[
                    ["Machine Learning", 88],
                    ["Deep Learning",    93],
                    ["Generative AI",    96],
                  ].map(([skill, pct]) => (
                    <div key={skill as string}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-blue-100 font-medium">{skill as string}</span>
                        <span className="text-teal-300 font-semibold">{pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-blue-400"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer row */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-blue-200">Next cohort</span>
                  <span className="text-white font-semibold">May 15, 2025</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-[#0D9488] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                🏆 Most Popular
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white text-slate-800 text-xs font-semibold px-3 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                1,200+ enrolled this month
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ─────────────────────────────── */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in-up delay-400">
            {HERO_STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

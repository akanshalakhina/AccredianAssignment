import { FEATURES } from "@/lib/data";
import type { Feature } from "@/types";

function FeatureCard({ icon, title, description }: Omit<Feature, "id">) {
  return (
    <div className="group card p-6 flex gap-4">
      {/* Icon block */}
      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-slate-900 text-[15px] mb-1.5 group-hover:text-[#1A56DB] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-[#F8FAFC]">
      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label">Why Accredian Enterprise</span>
          <h2 className="text-heading text-slate-900 mb-4">
            Everything your L&amp;D team needs,{" "}
            <span className="gradient-text">in one platform</span>
          </h2>
          <p className="text-subheading">
            We partner with your HR and L&amp;D leaders to build a learning culture
            that drives retention, performance, and growth at scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

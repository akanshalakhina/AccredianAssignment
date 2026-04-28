import Link from "next/link";

const FOOTER_LINKS: Record<string, string[]> = {
  Company:    ["About Us", "Careers", "Press", "Blog"],
  Programs:   ["Data Science & AI", "Product Management", "Digital Marketing", "Generative AI"],
  Enterprise: ["For Corporates", "Bulk Enrolment", "Custom Programs", "Analytics"],
  Support:    ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

const SOCIAL = [
  { label: "𝕏",  href: "#" },
  { label: "in", href: "#" },
  { label: "▶",  href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="section-container pt-16 pb-8">

        {/* ── Main grid ─────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          {/* Brand col — spans 2 on md */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1A56DB] to-[#0D9488] flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">A</span>
              </div>
              <span className="text-white font-bold">Accredian</span>
            </div>

            <p className="text-sm leading-relaxed max-w-[220px]">
              Upskilling enterprises with world-class, IIT-backed education programs.
            </p>

            <div className="flex gap-2.5 mt-6">
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#1A56DB] flex items-center justify-center text-[11px] text-slate-400 hover:text-white transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">{heading}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ────────────────────────────── */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <Link key={l} href="#" className="hover:text-white transition-colors duration-150">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

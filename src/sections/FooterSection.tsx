import ContactButton from "../components/ContactButton";
import { PERSONAL } from "../data";

import {
  Github,
  Instagram,
  Facebook,
  // Mail,
  ArrowUpRight,
} from "lucide-react";

export default function FooterSection() {
  const links = [
    {
      label: "GitHub",
      href: PERSONAL.github,
      icon: Github,
    },
    {
      label: "Instagram",
      href: PERSONAL.instagram,
      icon: Instagram,
    },
    {
      label: "Facebook",
      href: PERSONAL.facebook,
      icon: Facebook,
    },
    // {
    //   label: "Email",
    //   href: `mailto:${PERSONAL.email}`,
    //   icon: Mail,
    // },
  ];

  return (
    <footer
      id="contact"
      className="px-6 md:px-10 pt-24 pb-10"
      style={{
        background: "#0C0C0C",
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Left */}
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.35em] text-xs text-white/40 mb-4">
              Contact
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
              Let's Build
              <br />
              Something Great.
            </h2>

            <p className="text-white/60 mt-6 leading-8">
              I'm always open to discussing new projects, creative ideas,
              freelance opportunities, or collaborations.
            </p>

            <div className="mt-8">
              <ContactButton href={`mailto:${PERSONAL.email}`} />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">

            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-white/40 mb-3">
                Email
              </p>

              <a
                href={`mailto:${PERSONAL.email}`}
                className="text-white text-lg hover:text-blue-400 transition-colors"
              >
                {PERSONAL.email}
              </a>
            </div>

            <div className="pt-6">
              <p className="uppercase text-xs tracking-[0.3em] text-white/40 mb-5">
                Social
              </p>

              <div className="flex flex-col gap-4">
                {links.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        text-white/70
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Icon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />

                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-white/40">

          <p>
            © {new Date().getFullYear()} {PERSONAL.name}
          </p>

          <p>
            Designed & Built with React, Tailwind CSS & Spring Boot
          </p>

        </div>
      </div>
    </footer>
  );
}
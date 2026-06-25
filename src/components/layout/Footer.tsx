"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Athletes", href: "/athletes" },
    { label: "Parents", href: "/parents" },
    { label: "Coaches", href: "/coaches" },
    { label: "Club & School", href: "/club" },
    { label: "Partner Program", href: "/partners" },
  ],
  Resources: [
    { label: "Performance Management", href: "/resources/performance-management" },
    { label: "Research", href: "/research" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/athletic-mindset-logo.png"
                alt="Athletic Mindset"
                width={140}
                height={35}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Psychologist-engineered mental performance platform. Measuring what
              matters across 3 phases, 8 factors, and 22 dimensions of athletic
              mindset.
            </p>
            <p className="text-text-muted text-xs">
              info@myathleticmindset.com
              <br />
              P.O. Box 2259 Ann Arbor, MI 48106
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 pb-20 md:pb-0">
          <p className="text-xs text-text-muted">
            © 2026 Athletic Mindset LLC. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Engineered by Psychologists. Fueled by Science. Driven by Athletes.
          </p>
        </div>
      </div>
    </footer>
  );
}

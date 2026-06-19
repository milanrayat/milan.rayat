import Link from 'next/link'
import { Mail, ExternalLink, Calendar } from 'lucide-react'
import { getProfile } from '@/lib/db'

export async function Footer() {
  const PERSON = await getProfile()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/30" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p className="font-heading font-semibold text-foreground text-lg">
              {PERSON.name}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Senior PM &amp; AI PM · Enterprise B2B SaaS<br />
              Sprinklr · IIT Guwahati
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'My Story' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              {"Let's Connect"}
            </p>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href={`mailto:${PERSON.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  aria-label="Send an email"
                >
                  <Mail size={14} aria-hidden="true" />
                  {PERSON.email}
                </a>
              </li>
              <li>
                <a
                  href={PERSON.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                    <ExternalLink size={14} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={PERSON.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  aria-label="Schedule a meeting on Calendly (opens in new tab)"
                >
                  <Calendar size={14} aria-hidden="true" />
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {PERSON.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Senior PM · AI Products · Enterprise B2B SaaS
          </p>
        </div>
      </div>
    </footer>
  )
}

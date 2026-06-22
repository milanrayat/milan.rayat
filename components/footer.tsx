import Link from 'next/link'
import { getProfile } from '@/lib/db'

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'My Story' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

export async function Footer() {
  const PERSON = await getProfile()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col items-center gap-6">
        <nav aria-label="Footer navigation">
          <ul
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            role="list"
          >
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={PERSON.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label="LinkedIn profile (opens in new tab)"
        >
          LinkedIn &#8599;
        </a>

        <div className="flex flex-col items-center gap-1 pt-2">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
            Designed and built solo by {PERSON.name} &middot; Shipped via Claude Code
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
            &copy; {currentYear} &middot; Paris
          </p>
        </div>
      </div>
    </footer>
  )
}

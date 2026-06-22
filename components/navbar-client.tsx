'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Calendar, FileDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PERSON } from '@/lib/data'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'My Story' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: "Let's Connect" },
]

export function NavbarClient({ name }: { name: string }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
          : 'bg-background/40 backdrop-blur-sm border-b border-transparent'
      )}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-foreground font-heading font-bold text-lg tracking-tight hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label={`${name} — Home`}
        >
          {name}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1 pb-1 after:absolute after:left-1 after:right-1 after:-bottom-0 after:h-px after:bg-accent after:transition-opacity',
                    isActive
                      ? 'text-accent after:opacity-100'
                      : 'text-muted-foreground hover:text-foreground after:opacity-0'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PERSON.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 border border-border text-foreground text-sm font-semibold px-4 py-2 rounded-md hover:border-accent/50 hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Download resume"
          >
            <FileDown size={15} aria-hidden="true" />
            Resume
          </a>
          <a
            href={PERSON.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-md hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Book a call (opens in new tab)"
          >
            <Calendar size={15} aria-hidden="true" />
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>

    {/* Full-screen mobile menu */}
    <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 top-16 z-50 bg-background backdrop-blur-md transition-all duration-300',
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="h-full flex flex-col px-6 py-10">
          <ul className="flex flex-col items-center gap-6" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'text-2xl font-heading font-semibold transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm',
                      isActive ? 'text-accent underline underline-offset-8' : 'text-muted-foreground hover:text-foreground'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={PERSON.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-base font-semibold px-6 py-3 rounded-md hover:border-accent/50 hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Download resume"
            >
              <FileDown size={18} aria-hidden="true" />
              Resume
            </a>
            <a
              href={PERSON.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground text-base font-semibold px-6 py-3 rounded-md hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Book a call (opens in new tab)"
            >
              <Calendar size={18} aria-hidden="true" />
              Book a Call
            </a>
          </div>
        </div>
    </div>
    </>
  )
}

import { ExternalLink, Calendar, ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { getProfile } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Milan Rayat | Senior AI PM',
  description:
    "Get in touch with Milan Rayat. Open to Senior PM and AI PM roles at AI-first B2B SaaS companies. Schedule a call, send a message, or connect on LinkedIn.",
}

export default async function ContactPage() {
  const PERSON = await getProfile()

  const CONTACT_OPTIONS = [
    {
      icon: Calendar,
      label: 'Schedule a Call',
      description: 'Book a 30-minute intro call via Calendly.',
      action: 'Open Calendly',
      href: PERSON.calendly,
      external: true,
    },
    {
      icon: ExternalLink,
      label: 'Connect on LinkedIn',
      description: "Let's connect and stay in each other's networks.",
      action: 'View LinkedIn Profile',
      href: PERSON.linkedin,
      external: true,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {"Let's Connect"}
            </p>
            <h1
              id="contact-heading"
              className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 text-balance"
            >
              {"Let's build something together."}
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              {"I'm actively exploring PM opportunities at AI-first B2B SaaS companies, growth-stage startups, and Big Tech. If you're building in customer analytics, AI, or enterprise SaaS — I'd love to talk."}
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="contact-options-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="contact-options-heading"
              className="font-heading font-semibold text-xl text-foreground mb-8"
            >
              How to reach me
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
              role="list"
              aria-label="Contact options"
            >
              {CONTACT_OPTIONS.map(({ icon: Icon, label, description, action, href, external }) => (
                <div
                  key={label}
                  role="listitem"
                  className="flex flex-col gap-4 rounded-lg border border-border/50 bg-card p-6 transition-all duration-200 hover:border-border"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary"
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-muted-foreground" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-semibold text-foreground text-base">{label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    aria-label={`${label}${external ? ' (opens in new tab)' : ''}`}
                  >
                    {action}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drop me a Message */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="message-heading"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Prefer to write it out?
            </p>
            <h2
              id="message-heading"
              className="font-heading font-semibold text-xl text-foreground mb-8"
            >
              Drop me a Message
            </h2>
            <div className="rounded-lg border border-border/50 bg-card p-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

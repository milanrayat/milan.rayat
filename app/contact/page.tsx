import { Mail, ExternalLink, Calendar, MapPin, ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getProfile } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Milan Rayat | Senior AI PM',
  description:
    "Get in touch with Milan Rayat. Open to Senior PM and AI PM roles at AI-first B2B SaaS companies. Schedule a call, send an email, or connect on LinkedIn.",
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
      primary: true,
    },
    {
      icon: Mail,
      label: 'Send an Email',
      description: 'Prefer async? Drop me a line directly.',
      action: PERSON.email,
      href: `mailto:${PERSON.email}`,
      external: false,
      primary: false,
    },
    {
      icon: ExternalLink,
      label: 'Connect on LinkedIn',
      description: "Let's connect and stay in each other's networks.",
      action: 'View LinkedIn Profile',
      href: PERSON.linkedin,
      external: true,
      primary: false,
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
              Contact
            </p>
            <h1
              id="contact-heading"
              className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 text-balance"
            >
              {"Let's build something together."}
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              {"I'm actively exploring Senior PM and AI PM opportunities at AI-first B2B SaaS companies, growth-stage startups, and Big Tech. If you're building in the contact center, AI, or enterprise SaaS space — I'd love to talk."}
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              role="list"
              aria-label="Contact options"
            >
              {CONTACT_OPTIONS.map(({ icon: Icon, label, description, action, href, external, primary }) => (
                <div
                  key={label}
                  role="listitem"
                  className={`flex flex-col gap-4 rounded-lg border p-6 transition-all duration-200 ${
                    primary
                      ? 'border-accent/40 bg-accent/5 hover:border-accent/60'
                      : 'border-border/50 bg-card hover:border-border'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      primary ? 'bg-accent/20' : 'bg-secondary'
                    }`}
                    aria-hidden="true"
                  >
                    <Icon size={18} className={primary ? 'text-accent' : 'text-muted-foreground'} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-semibold text-foreground text-base">{label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                      primary
                        ? 'text-accent hover:text-accent/80'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
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

        {/* Availability & Role Details */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="availability-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2
                  id="availability-heading"
                  className="font-heading font-semibold text-xl text-foreground mb-2"
                >
                  Availability & Fit
                </h2>
                <p className="text-sm text-muted-foreground">
                  What I bring and what I am looking for.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Target Roles
                    </p>
                    <ul className="flex flex-col gap-1.5" role="list">
                      {[
                        'Senior Product Manager',
                        'AI Product Manager',
                        'Group PM / Principal PM',
                        'Product Lead — AI / ML',
                      ].map((role) => (
                        <li key={role} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1 text-xs shrink-0" aria-hidden="true">—</span>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Target Companies
                    </p>
                    <ul className="flex flex-col gap-1.5" role="list">
                      {[
                        'AI-first B2B SaaS',
                        'Growth-stage Startups',
                        'Big Tech (Google, Amazon)',
                        'ServiceNow, Zendesk, Salesforce',
                      ].map((company) => (
                        <li key={company} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1 text-xs shrink-0" aria-hidden="true">—</span>
                          {company}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Location
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} aria-hidden="true" />
                      India · Open to Relocation
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Comfortable with remote-first, hybrid, or in-person. Experienced working across India, US, and UAE time zones.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Response Time
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {"I respond to every serious inquiry within 24 hours. For scheduling, Calendly is the fastest path."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 lg:px-8" aria-labelledby="final-cta-heading">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-10 lg:p-14 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Ready to talk?
              </p>
              <h2
                id="final-cta-heading"
                className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4 text-balance"
              >
                {"5+ years of enterprise product execution. Let's connect."}
              </h2>
              <p className="text-muted-foreground text-base max-w-lg mx-auto mb-8 text-pretty">
                From $20M ARR growth to $10M deal wins — I ship products that matter. If that sounds like what your team needs, pick a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PERSON.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-6 py-3 rounded-md hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Schedule a call on Calendly (opens in new tab)"
                >
                  <Calendar size={16} aria-hidden="true" />
                  Schedule a Call
                </a>
                <a
                  href={`mailto:${PERSON.email}`}
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3 rounded-md hover:border-accent/50 hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Send an email"
                >
                  <Mail size={16} aria-hidden="true" />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

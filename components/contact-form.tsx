'use client'

import { useActionState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { submitContactForm, type ContactFormState } from '@/app/contact/actions'

const initialState: ContactFormState = { status: 'idle' }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="flex flex-col gap-5 max-w-xl">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md border border-border/50 bg-card px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-border/50 bg-card px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-md border border-border/50 bg-card px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Sending…' : 'Send Message'}
        </Button>
        {state.status === 'success' && (
          <span className="flex items-center gap-2 text-sm text-emerald-500">
            <CheckCircle2 size={16} aria-hidden="true" />
            {state.message}
          </span>
        )}
        {state.status === 'error' && (
          <span className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle size={16} aria-hidden="true" />
            {state.message}
          </span>
        )}
      </div>
    </form>
  )
}

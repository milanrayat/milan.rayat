import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { PERSON } from '@/lib/data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE_LENGTH = 5000

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>

  if (typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 400 })
  }
  if (typeof email !== 'string' || !EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (typeof message !== 'string' || !message.trim()) {
    return NextResponse.json({ ok: false, error: 'Please enter a message.' }, { status: 400 })
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ ok: false, error: 'Message is too long.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'Email delivery is not configured yet. Please reach out via Calendly or LinkedIn instead.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)
  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact Form <onboarding@resend.dev>`,
      to: PERSON.email,
      replyTo: trimmedEmail,
      subject: `New message from ${trimmedName} via portfolio site`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p><p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p><p><strong>Message:</strong></p><p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br />')}</p>`,
    })

    if (error) {
      return NextResponse.json({ ok: false, error: 'Failed to send message. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

'use server'

import { prisma } from '@/lib/prisma'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all fields.' }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  await prisma.contactSubmission.create({
    data: { name, email, message },
  })

  return { status: 'success', message: "Thanks — I'll get back to you within 24 hours." }
}

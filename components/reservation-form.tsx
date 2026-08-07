'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Anchor, Check } from 'lucide-react'

type ReservationFormProps = { compact?: boolean }

export function ReservationForm({ compact = false }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true) }

  if (submitted) return <div className="success-message"><Check size={27} /><h3>We&apos;ll see you by the sea.</h3><p>Your request is with our team. We&apos;ll call shortly to confirm your table.</p><button className="button button-navy" onClick={() => setSubmitted(false)}>Make another request</button></div>

  return <form onSubmit={submit}>
    <label>Name<input required placeholder="Your name" /></label>
    <label>Phone<input required type="tel" placeholder="+91 00000 00000" /></label>
    {!compact && <label>Email<input required type="email" placeholder="you@example.com" /></label>}
    <div className="form-row"><label>Date<input required type="date" /></label><label>Guests<select defaultValue="2 guests"><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label></div>
    {!compact && <label>Anything we should know?<textarea rows={3} placeholder="A birthday, dietary note, or special request" /> </label>}
    <label>Choose your outlet<select required defaultValue=""><option value="" disabled>Select an outlet</option><option>Panambur Beach Road</option><option>Old Port, Mangalore</option><option>Surathkal Seafront</option></select></label>
    <button className="button button-navy" type="submit">Request a table <ArrowRight size={17} /></button>
    <small className="form-note">For parties of 8 or more, please call us directly.</small>
  </form>
}

export function WhatsAppButton({ label = 'Reserve on WhatsApp' }: { label?: string }) {
  const message = encodeURIComponent('Hello SeaSecret, I would like to reserve a table.')
  return <a className="whatsapp-button" href={`https://wa.me/918242411987?text=${message}`} target="_blank" rel="noreferrer"><span className="whatsapp-mark">WA</span>{label}</a>
}

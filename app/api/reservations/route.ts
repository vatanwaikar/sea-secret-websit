import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const outletData = {
  deccan: {
    label: 'JM Road Outlet',
    email: 'theseasecretdeccan@gmail.com',
  },
  nibm: {
    label: 'NIBM Outlet',
    email: 'theseasecretnibm@gmail.com',
  },
}

async function createTransport() {
  const host = process.env.EMAIL_HOST
  const port = Number(process.env.EMAIL_PORT || '587')
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASSWORD

  if (!host || !port || !user || !pass) {
    throw new Error('Email transport is not configured. Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, and EMAIL_PASSWORD.')
  }

  return nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  })
}

export async function POST(request: Request) {
  try {
   type ReservationRequest = {
  name: string
  phone: string
  email?: string
  date: string
  guests: string | number
  outlet: keyof typeof outletData
  notes?: string
}

const body: ReservationRequest = await request.json()

const {
  name,
  phone,
  email,
  date,
  guests,
  outlet,
  notes,
} = body

if (
  !name ||
  !phone ||
  !date ||
  !guests ||
  !outlet ||
  !outletData[outlet]
) {
  return NextResponse.json(
    { error: 'Missing required reservation fields.' },
    { status: 400 }
  )
}

const outletInfo = outletData[outlet]
    const subject = `SeaSecret reservation request from ${name}`
    const message = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : undefined,
      `Outlet: ${outletInfo.label}`,
      `Date: ${date}`,
      `Guests: ${guests}`,
      notes ? `Notes: ${notes}` : undefined,
    ]
      .filter(Boolean)
      .join('\n')

    const transport = await createTransport()

    await transport.sendMail({
      from: `SeaSecret Reservations <${process.env.EMAIL_USER}>`,
      to: outletInfo.email,
      subject,
      text: message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reservation error:', error)
    return NextResponse.json({ error: 'Unable to send reservation notification.' }, { status: 500 })
  }
}

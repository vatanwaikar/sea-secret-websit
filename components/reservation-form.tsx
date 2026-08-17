"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Anchor, Check } from "lucide-react";

type ReservationFormProps = { compact?: boolean };
type OutletKey = "deccan" | "nibm";

const outletData: Record<
  OutletKey,
  { label: string; email: string; whatsapp: string }
> = {
  deccan: {
    label: "JM Road Outlet",
    email: "theseasecretdeccan@gmail.com",
    whatsapp: "91822748198",
  },
  nibm: {
    label: "NIBM Outlet",
    email: "theseasecretnibm@gmail.com",
    whatsapp: "918530141444",
  },
};

export function ReservationForm({ compact = false }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const allSlots = [
    "11:30 AM",
    "12:30 PM",
    "1:30 PM",
    "2:30 PM",
    "3:30 PM",
    "4:30 PM",
    "5:30 PM",
    "6:30 PM",
    "7:30 PM",
    "8:30 PM",
    "9:30 PM",
    "10:30 PM",
  ];

  const availableSlots = allSlots.filter((slot) => {
    const now = new Date();
    const minimumTime = new Date(now.getTime() + 60 * 60 * 1000);

    const [time, period] = slot.split(" ");
    let [hour, minute] = time.split(":").map(Number);

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    const slotTime = new Date();
    slotTime.setHours(hour, minute, 0, 0);

    return slotTime >= minimumTime;
  });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const date = formData.get("date")?.toString().trim() ?? "";
    const guests = formData.get("guests")?.toString().trim() ?? "";
    const time = formData.get("time")?.toString().trim() ?? "";
    const outlet = formData.get("outlet")?.toString() as OutletKey;
    const notes = formData.get("notes")?.toString().trim() ?? "";

    if (!outlet || !outletData[outlet]) {
      setError("Please choose a valid outlet.");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        date,
        time,
        guests,
        outlet,
        notes,
      }),
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setError(
        data?.error ??
          "Unable to send your reservation request. Please try again later.",
      );
      return;
    }

    setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="success-message">
        <Check size={27} />
        <h3>We&apos;ll see you by the sea.</h3>
        <p>
          Your request is with our team. We&apos;ll call shortly to confirm your
          table.
        </p>
        <button
          className="button button-navy"
          onClick={() => setSubmitted(false)}
        >
          Make another request
        </button>
      </div>
    );

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Phone
        <input name="phone" required type="tel" placeholder="+91 00000 00000" />
      </label>
      {!compact && (
        <label>
          Email
          <input
            name="email"
            required
            type="email"
            placeholder="you@example.com"
          />
        </label>
      )}
      <div className="form-row">
        <label>
          Date
          <input name="date" required type="date" />
        </label>
        <label>
          Guests
          <select name="guests" defaultValue="2 guests">
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
            <option>5+ guests</option>
          </select>
        </label>
      </div>
      {!compact && (
        <label>
          Anything we should know?
          <textarea
            name="notes"
            rows={3}
            placeholder="A birthday, dietary note, or special request"
          />
        </label>
      )}
      <label>
        Time Slot
        <select name="time" required defaultValue="">
          <option value="" disabled>
            Select Time Slot
          </option>

          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))
          ) : (
            <option disabled>No slots available today</option>
          )}
        </select>
      </label>
      <label>
        Choose your outlet
        <select name="outlet" required defaultValue="">
          <option value="" disabled>
            Select an outlet
          </option>
          <option value="deccan">JM Road Outlet</option>
          <option value="nibm">NIBM Outlet</option>
        </select>
      </label>
      <button className="button button-navy" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Request a table"} <ArrowRight size={17} />
      </button>
      <small className="form-note">
        For parties of 8 or more, please call us directly.
      </small>
      {error ? (
        <p style={{ color: "red", marginTop: "0.85rem" }}>{error}</p>
      ) : null}
    </form>
  );
}

export function WhatsAppButton({
  outlet = "deccan",
  label = "Reserve on WhatsApp",
}: {
  outlet?: OutletKey;
  label?: string;
}) {
  const outletInfo = outletData[outlet];
  const message = encodeURIComponent(
    `Hello SeaSecret, I would like to reserve a table at the ${outletInfo.label}.`,
  );

  return (
    <a
      className={`whatsapp-button ${outlet}`}
      href={`https://wa.me/${outletInfo.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className="whatsapp-mark">WA</span>
      {label}
    </a>
  );
}

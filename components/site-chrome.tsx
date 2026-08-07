"use client";

import { useState } from "react";
import {
  ArrowRight,
  Camera,
  ChevronDown,
  Mail,
  Menu as MenuIcon,
  Waves,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { WhatsAppButton } from "@/components/reservation-form";
import Image from "next/image";

const links = [
  ["About", "/about"],
  ["Menu", "/#menu"],
  ["Events", "/#events"],
  ["Gallery", "/#gallery"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="/" onClick={() => setOpen(false)}>
          <Image
            src="/seasecretlogo.png"
            alt="Sea Secret"
            width={170}
            height={60}
            priority
          />
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-reserve"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Reserve a table <ArrowRight size={15} />
          </a>
        </div>
        <button
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <a
        className="floating-whatsapp"
        href="https://wa.me/918242411987?text=Hello%20SeaSecret%2C%20I%20would%20like%20to%20reserve%20a%20table."
        target="_blank"
        rel="noreferrer"
        aria-label="Reserve on WhatsApp"
      >
        <span className="whatsapp-mark">WA</span>
      </a>
      <footer className="site-footer">
        <div className="footer-wave" aria-hidden="true">
          <Waves />
        </div>
        <div className="footer-columns">
          <div className="footer-intro">
            <a className="brand footer-brand" href="/">
              <Image
                src="/seasecretlogo.png"
                alt="Sea Secret"
                width={170}
                height={60}
              />
            </a>
            <p>
              Fresh catch. Slow evenings.
              <br />
              Good company.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick links</h3>
            <a href="/">Home</a>
            <a href="/about">Our Story</a>
            <a href="/#menu">Menu</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <h3>Find us</h3>
            <p>
              JM Road Outlet
              <br />
              NIBM Outlet
            </p>
            <a href="tel:+918242411987">+91 824 241 1987</a>
            <a href="mailto:hello@seasecret.in">hello@seasecret.in</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SeaSecret</span>
          <span>Made with love in Pune</span>
          <div className="footer-bottom-actions">
            <div className="socials">
              {/* Instagram Dropdown */}
              <div className="social-dropdown">
                <button className="social-btn" aria-label="Instagram">
                  <FaInstagram size={18} />
                </button>

                <div className="social-menu">
                  <a
                    href="https://www.instagram.com/theseasecret_deccan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 JM Road Outlet
                  </a>

                  <a
                    href="https://www.instagram.com/theseasecretnibm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 NIBM Outlet
                  </a>
                </div>
              </div>

              {/* Facebook Dropdown */}
              <div className="social-dropdown">
                <button className="social-btn" aria-label="Facebook">
                  <FaFacebookF size={18} />
                </button>

                <div className="social-menu">
                  <a
                    href="https://www.facebook.com/seasecretpune"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 JM Road Outlet
                  </a>

                  <a
                    href="https://www.facebook.com/theseasecretnibm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 NIBM Outlet
                  </a>
                </div>
              </div>
            </div>
            <a href="#top">
              Back to top <ChevronDown size={14} className="back-top" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

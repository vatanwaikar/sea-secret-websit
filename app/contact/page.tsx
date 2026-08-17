import { ArrowRight, Clock3, Mail, MapPin, Phone, Waves } from "lucide-react";
import { ReservationForm, WhatsAppButton } from "@/components/reservation-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function ContactPage() {
  return (
    <main className="sea-secret inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero contact-hero">
        <div className="inner-hero-wash" />
        <div className="inner-hero-content">
          <p className="eyebrow light">
            <span />
            Your table awaits
          </p>
          <h1>
            Let the sea
            <br />
            <em>set the mood.</em>
          </h1>
          <p>
            Reservations, celebrations, directions, and everything in between.
          </p>
        </div>
      </section>
      <section className="section contact-page-section">
        <div className="contact-page-grid">
          <div>
            <p className="eyebrow">
              <span />
              Come find us
            </p>
            <h2>
              Two Locations.
              <br />
              <em>One Great Experience.</em>
            </h2>
            <p className="section-copy">
              Whether it&apos;s dinner for two, a family lunch, or a celebration
              under the palms, we&apos;ll keep a place for you.
            </p>
            <div className="detail-list">
              <p>
                <MapPin size={18} />
                <span>
                  <strong>JM Road Outlet</strong>
                  <br />
                  R Deccan Mall, 1st Floor,
                  <br />
                  Jangali Maharaj Rd,
                  <br />
                  Above KFC,
                  <br />
                  Opp. Deccan PMPL,
                  <br />
                  Deccan Gymkhana,
                  <br />
                  Pune - 411004
                </span>
              </p>

              <p>
                <Phone size={18} />
                <span>
                  <a href="tel:+919822748198">+91 98227 48198</a>
                </span>
              </p>

              <p>
                <Mail size={18} />
                <span>
                  <a href="mailto:theseasecretdeccan@gmail.com">theseasecretdeccan@gmail.com</a>
                </span>
              </p>

              <p>
                <MapPin size={18} />
                <span>
                  <strong>NIBM Outlet</strong>
                  <br />
                  First Floor,
                  <br />
                  Royale Heritage Mall,
                  <br />
                  Mohammed Wadi,
                  <br />
                  Pune - 411060
                </span>
              </p>

              <p>
                <Phone size={18} />
                <span>
                  <a href="tel:+918530141444">+91 85301 41444</a>
                </span>
              </p>

              <p>
                <Mail size={18} />
                <span>
                  <a href="mailto:theseasecretnibm@gmail.com">theseasecretnibm@gmail.com</a>
                </span>
              </p>

              <p>
                <Clock3 size={18} />
                <span>
                  <strong>Open Daily</strong>
                  <br />
                  11:45 AM – 11:45 PM
                </span>
              </p>
            </div>
          </div>
          <div className="contact-form-wrap" id="reserve">
            <div className="card-top">
              <span>Reserve your table</span>
              <Waves size={20} />
            </div>
            <ReservationForm />
          </div>
        </div>
      </section>
      <section className="section visit-section">
        <div className="visit-heading">
          <p className="eyebrow">
            <span />
            Take the scenic route
          </p>
          <h2>
          Choose Your
            <br />
            <em>Nearest Outlet.</em>
          </h2>
        </div>
        <div className="map-panel">
          <div className="map-copy">
    <MapPin size={24} />

    <p>
      <strong>JM Road Outlet</strong>
      <br />
      R Deccan Mall,
      <br />
      Deccan Gymkhana,
      <br />
      Pune
    </p>

    <a
      className="text-link"
      href="https://maps.google.com/?q=R+Deccan+Mall+JM+Road+Pune"
      target="_blank"
      rel="noreferrer"
    >
      Get Directions
      <ArrowRight size={16} />
    </a>
    <WhatsAppButton outlet="deccan" label="Chat on WhatsApp" />
  </div>

  <div className="map-copy">
    <MapPin size={24} />

    <p>
      <strong>NIBM Outlet</strong>
      <br />
      Royale Heritage Mall,
      <br />
      Mohammed Wadi,
      <br />
      Pune
    </p>

    <a
      className="text-link"
      href="https://maps.google.com/?q=Royale+Heritage+Mall+NIBM+Pune"
      target="_blank"
      rel="noreferrer"
    >
      Get Directions
      <ArrowRight size={16} />
    </a>
    <WhatsAppButton outlet="nibm" label="Chat on WhatsApp" />
  </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="section">
          <p className="eyebrow light">
            <span />
            Good to know
          </p>
          <h2>
            A few answers
            <br />
            <em>before you arrive.</em>
          </h2>
          <div className="faq-grid">
            <div>
              <h3>Do I need a reservation?</h3>
              <p>
                We recommend one for dinner and weekends. Walk-ins are welcome
                whenever we have a table to spare.
              </p>
            </div>
            <div>
              <h3>Can you host celebrations?</h3>
              <p>
                Absolutely. Tell us what you are planning and we can arrange a
                private corner, a set menu.
              </p>
            </div>
            <div>
              <h3>Do you cater to dietary needs?</h3>
              <p>
                Our menu has plenty of naturally gluten-free options. Please
                mention allergies when you reserve so our kitchen can prepare
                with care.
              </p>
            </div>
            <div>
              <h3>Is parking available?</h3>
              <p>
                There is parking near the restaurant and easy access 
                
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

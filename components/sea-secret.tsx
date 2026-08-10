'use client'

import { ArrowDown, ArrowRight, CalendarDays, Check, ChevronDown, Clock3, Leaf, MapPin, Phone, Sparkles, Star, Utensils, Waves } from 'lucide-react'
import { MenuGallery } from '@/components/menu-gallery'
import { ReservationForm } from '@/components/reservation-form'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

const dishes = {
  Signatures: [['Prawn Ghee Roast', 'Mangalorean spices, curry leaf, coastal ghee', '₹845'], ['Crab Masala', 'Whole crab, roasted coconut, tamarind', '₹1,050'], ['Lobster Butter Garlic', 'Charred lobster, kokum butter, herbs', '₹1,450'], ['Clams Sukka', 'Tender clams, fresh coconut, Byadgi chilli', '₹695']],
  'From the Coast': [['Fish Curry', 'Daily catch, raw mango, coconut milk', '₹625'], ['Pomfret Fry', 'Ajwain, lime, crisp coastal marinade', '₹895'], ['Surmai Tawa Fry', 'Iron tawa, pepper, garlic, curry leaf', '₹775'], ['Squid Fry', 'Tender squid, fennel, green chilli', '₹645']],
  'The Table': [['Neer Dosa', 'Soft rice crepes, coconut chutney', '₹225'], ['Appam', 'Lacy rice hoppers, palm jaggery', '₹245'], ['Malabar Parotta', 'Layered, flaky, hand-rolled', '₹195'], ['Coastal Rice Bowl', 'Steamed rice, pickle, seasonal sides', '₹325']],
}
const menuItems = Object.values(dishes).flat() as [string, string, string][]
const reviews = [['Ananya Rao', 'The freshest seafood and the warmest service. A true Mangalore gem.', '2 weeks ago'], ['Rahul Menon', 'The sunset table, the crab masala, the stories — everything felt special.', '1 month ago'], ['Priya Shah', 'A beautiful, soulful dining experience. We are already planning our next visit.', '3 months ago']]

function LeafCorners({ dark = false }: { dark?: boolean }) { return <><Leaf aria-hidden="true" className={`corner-leaf corner-leaf-left ${dark ? 'text-sand/30' : 'text-palm/20'}`} /><Leaf aria-hidden="true" className={`corner-leaf corner-leaf-right ${dark ? 'text-sand/30' : 'text-palm/20'}`} /></> }
function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <div className="section-intro"><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2><p className="section-copy">{copy}</p></div> }

export function SeaSecret() {
  return <main className="sea-secret" id="top"><SiteHeader />
    <section id="home" className="hero"><div className="hero-image" /><div className="hero-wash" /><div className="hero-content"><p className="eyebrow light"><span />Authentic Coastal Dining in Pune</p><h1>Where the<br /><em>tide</em> meets the table.</h1><p className="hero-copy">Fresh seafood, authentic coastal recipes & unforgettable dining experiences at our JM Road and NIBM outlets.</p><div className="hero-actions"><a className="button button-gold" href="#menu">Explore the menu <ArrowRight size={17} /></a><a className="button button-ghost" href="#contact">Reserve a table <CalendarDays size={16} /></a></div></div><a className="scroll-cue" href="#offer"><span>Scroll to wander</span><ArrowDown size={17} /></a><div className="hero-stamp"><Waves size={16} /><span>Fresh from<br />the coast</span></div></section>

    <section className="offer-banner"><div><p className="eyebrow light"><span />For the long weekend</p><h2>Sunset seafood<br /><em>for two.</em></h2><p>Reserve a golden-hour table and enjoy a chef&apos;s tasting of today&apos;s catch, with two coastal cocktails.</p></div><a className="button button-gold" href="/contact">Claim the table <ArrowRight size={17} /></a></section>

<section id="about-teaser" className="section story-section">
  <LeafCorners />

  <div className="story-grid">
    <div className="story-image-wrap">
      <img
        src="/gallery/a.avif"
        alt="Sea Secret Coastal Dining"
      />
      <span className="image-caption">
        Authentic Coastal Flavours
      </span>
    </div>

    <div className="story-copy">
      <SectionIntro
        eyebrow="The Sea Secret Story"
        title="Fresh Seafood. Timeless Traditions."
        copy="Sea Secret brings the authentic taste of coastal cuisine to Pune, combining traditional recipes, the freshest ingredients, and warm hospitality to create memorable dining experiences."
      />

      <p>
        From our first outlet on JM Road in 2019 to our expansion at NIBM in
        2021, our journey has always been driven by one passion—serving
        exceptional seafood with authentic flavours, quality ingredients, and
        heartfelt service that keeps our guests coming back.
      </p>

      <a className="text-link" href="/about">
        Discover Our Journey
        <ArrowRight size={16} />
      </a>
    </div>
  </div>

  <div className="stats">
    <div>
      <strong>2</strong>
      <small>Premium Outlets in Pune</small>
    </div>

    <div>
      <strong>2019</strong>
      <small>Serving Since</small>
    </div>

    <div>
      <strong>100+</strong>
      <small>Coastal Specialities</small>
    </div>

    <div>
      <strong>∞</strong>
      <small>Memories Served Daily</small>
    </div>
  </div>
</section>

<section id="menu" className="section menu-section">
  <div className="menu-heading">
    <SectionIntro
      eyebrow="From our kitchen"
      title="Explore Our Menu."
copy="Discover authentic coastal seafood, handcrafted delicacies, signature cocktails."    />

    <span className="menu-mark">
      <Utensils size={26} />
      <small>
        Since
        <br />
        2019
      </small>
    </span>
  </div>

  <MenuGallery />
</section>
    <section id="events" className="event-section">
      <div className="event-panel">
        <div className="event-panel-copy">
          <p className="eyebrow light"><span />Gather by the water</p>
          <h2>Events that feel<br /><em>timeless.</em></h2>
          <p className="section-copy">From festive celebrations to intimate coastal gatherings, our events are designed to create premium moments that linger long after the last course.</p>
        </div>

        <div className="event-grid">
          <article className="event-card event-card-previous">
            <div className="event-card-media">
              <img src="/vishusadhya/vishu.jpg" alt="Vishu celebration at Sea Secret" loading="lazy" />
              <span className="event-pill">Previous Event</span>
            </div>
            <div className="event-card-body">
              <small>Vishu Festival</small>
              <h3>Vishu at Sea Secret</h3>
              <p>Celebrated with coastal spice-laden feasts, bright floral decor, and a lively dining experience that brought families together.</p>
              <div className="event-details">
                <span>Completed</span>
                <span>April 2026</span>
              </div>
            </div>
          </article>

          <article className="event-card event-card-upcoming">
            <div className="event-card-media">
              <img src="/onam/onnam.jpg" alt="Upcoming Onam event at Sea Secret" loading="lazy" />
              <span className="event-pill event-pill-accent">Upcoming Event</span>
            </div>
            <div className="event-card-body">
              <small>Onam Celebration</small>
              <h3>Onam Feast & Festivity</h3>
              <p>Experience a lavish coastal Onam spread, traditional sweets, and a festive atmosphere curated to celebrate the season in style.</p>
              <div className="event-details">
                <span>Scheduled</span>
                <span>August 2026</span>
              </div>
            </div>
          </article>
        </div>

        <a className="button button-cream" href="/contact">Host your event <ArrowRight size={17} /></a>
      </div>
    </section>

<section className="founders-section section">
  <div className="founders-heading">
    <p className="eyebrow">
      <span />Meet the Visionaries
    </p>

    <h2>
      The people behind
      <br />
      <em>Sea Secret.</em>
    </h2>

    <p className="section-copy">
      Meet the passionate founders whose vision, dedication and love for
      authentic coastal cuisine have made Sea Secret one of Pune's favourite
      seafood destinations.
    </p>
  </div>

  <div className="founder-grid">
    <article className="founder-card">
      <img
        src="/owner/ronny.jpg"
        alt="Sea Secret Founder"
        loading="lazy"
      />

      <div>
        <small>FOUNDER</small>
        <h3>Roney George</h3>
        <p>
          "Our goal has always been simple — serve authentic coastal food with
          exceptional hospitality."
        </p>
      </div>
    </article>

    <article className="founder-card">
      <img
        src="/owner/sabu.jpg"
        alt="Sea Secret Co-Founder"
        loading="lazy"
      />

      <div>
        <small>CO-FOUNDER</small>
        <h3>Sabu Varghese</h3>
        <p>
          "Every guest who walks into Sea Secret should leave with unforgettable
          memories and authentic flavours."
        </p>
      </div>
    </article>
  </div>
</section>

    <section className="reviews-section section"><SectionIntro eyebrow="Loved by the coast" title="Good food travels." copy="A few words from guests who have found their way to our table." /><div className="review-grid">{reviews.map(([name, copy, date]) => <article className="review-card" key={name}><div className="review-top"><span className="google-mark">G</span><span className="stars">{[1,2,3,4,5].map((star) => <Star key={star} size={13} fill="currentColor" />)}</span></div><p>“{copy}”</p><footer><strong>{name}</strong><small>{date} · Google Review</small></footer></article>)}</div></section>

<section id="gallery" className="section gallery-section">
  <SectionIntro
    eyebrow="A sense of place"
    title="Fresh flavours. Warm moments."
    copy="Explore the vibrant interiors, signature seafood delicacies"
  />

  <div className="gallery-grid">
    {[
      "/gallery/a.avif",
      "/gallery/b.avif",
      "/gallery/c.avif",
      "/gallery/d.avif",
      "/gallery/e.avif",
      "/gallery/f.avif",
    ].map((src, index) => (
      <figure
        className={`gallery-item gallery-${index + 1}`}
        key={src}
      >
        <img
          src={src}
          alt={`Sea Secret Gallery ${index + 1}`}
          loading="lazy"
        />
      </figure>
    ))}
  </div>
</section>
    <SiteFooter /></main>
}

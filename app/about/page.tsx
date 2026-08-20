import { ArrowRight, Check, Leaf, MapPin, Waves } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

const timeline = [

  [
    '2019',
    'Our journey begins',
    'Sea Secret opened its very first outlet on JM Road, Pune, bringing authentic coastal seafood flavours to the city.'
  ],
  [
    '2021',
    'A new destination',
    'With growing love from our guests, Sea Secret expanded to NIBM, Kondhwa, creating a larger space to serve more seafood lovers.'
  ],
  [
    'Today',
    'Serving Pune with passion',
    'Today, Sea Secret continues to serve fresh, authentic seafood with the same commitment to quality, warm hospitality, and unforgettable coastal flavours at both our Pune locations.'
  ],
]
export default function AboutPage() {
  return (
    <main className="sea-secret inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero about-hero">
        <div className="inner-hero-wash" />
        <div className="inner-hero-content"><p className="eyebrow light"><span />Our story</p><h1>From Fresh Catch.<br /><em>Authentic Flavours.</em></h1><p>Since 2019, Sea Secret has been serving authentic coastal seafood in Pune with fresh ingredients, timeless recipes, and warm hospitality.</p></div>
      </section>

      <section className="section about-intro"><Leaf aria-hidden="true" className="inner-leaf" /><div className="about-intro-grid"><div><p className="eyebrow"><span />Who We Are</p><h2>Authentic seafood, crafted with passion.</h2></div><div><p className="section-copy">Sea Secret was founded with one simple mission—to bring the authentic taste of coastal seafood to Pune. Every recipe is inspired by traditional flavours and prepared using fresh ingredients, premium spices, and years of culinary passion.</p><p className="section-copy">From our first outlet on JM Road to our second home in NIBM, Kondhwa, we have continued to serve seafood lovers with dishes that celebrate freshness, quality, and unforgettable dining experiences.</p></div></div></section>

      <section className="section about-philosophy"><div className="philosophy-image"><img src="/aboutus.jpeg" alt="A colorful seafood table prepared for sharing" /></div><div className="philosophy-copy"><p className="eyebrow"><span />Our Philosophy</p><h2>Fresh Ingredients.</h2><p className="section-copy">Every dish at Sea Secret begins with carefully selected ingredients. From fresh seafood and handcrafted spice blends to recipes perfected over the years, we believe exceptional food comes from uncompromising quality and genuine care.</p><div className="value-list"><p><Check size={16} /> Fresh seafood sourced daily</p><p><Check size={16} /> Authentic coastal recipes</p><p><Check size={16} /> Premium ingredients & house-made spices</p></div><a className="text-link" href="/contact">Come meet us <ArrowRight size={16} /></a></div></section>

      <section className="timeline-section"><div className="section timeline-wrap"><div className="timeline-heading"><p className="eyebrow light"><span />Our Journey</p><h2>Growing with<br /><em>every serving.</em></h2></div><div className="timeline-list">{timeline.map(([year, title, copy]) => <article className="timeline-item" key={year}><strong>{year}</strong><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

      <section className="about-cta"><div><Waves size={26} /><p className="eyebrow light"><span />Pull up a chair</p><h2>The best stories<br />start at the table.</h2><a className="button button-gold" href="/contact">Plan your visit <ArrowRight size={17} /></a></div><MapPin className="cta-map" size={150} strokeWidth={.5} /></section>
      <SiteFooter />
    </main>
  )
}

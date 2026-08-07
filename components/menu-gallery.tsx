'use client'

import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'

const menuImages = [
  ['https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85', 'Golden dining', 'A warm table by the coast'],
  ['https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', 'Prawn ghee roast', 'Mangalorean spices, curry leaf, coastal ghee'],
  ['https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85', 'The kitchen', 'Slow cooking, bright ingredients'],
  ['https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=85', 'Sea breeze', 'Fresh catch and sunset air'],
]

export function MenuGallery() {
  const [selected, setSelected] = useState<(typeof menuImages)[number] | null>(null)
  return <>
    <div className="menu-gallery-grid">{menuImages.map((image, index) => <button className={`menu-gallery-card menu-gallery-${index + 1}`} key={image[0]} onClick={() => setSelected(image)} aria-label={`View ${image[1]}`}><img src={image[0]} alt={image[1]} loading="lazy" /><span><strong>{image[1]}</strong><small>{image[2]}</small><ArrowRight size={16} /></span></button>)}</div>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected[1]} onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image"><X size={22} /></button><img src={selected[0]} alt={selected[1]} onClick={(event) => event.stopPropagation()} /><div className="lightbox-caption"><strong>{selected[1]}</strong><span>{selected[2]}</span></div></div>}
  </>
}

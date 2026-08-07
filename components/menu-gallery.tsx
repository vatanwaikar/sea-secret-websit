"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const menuSections = [
  {
    key: "menu",
    title: "The Sea Secret Menu",
    subtitle: "Our signature à la carte offerings.",
    cover: "/menu/1m.jpg",
    images: [
      "/menu/1m.jpg",
      "/menu/2m.jpg",
      "/menu/3m.jpg",
      "/menu/4m.jpg",
      "/menu/5m.jpg",
      "/menu/6.jpg",
      "/menu/7.jpg",
      "/menu/8.jpg",
      "/menu/9.jpg",
    ],
  },
  {
    key: "buffet",
    title: "Buffet & Combo Menu",
    subtitle: "Feast-style sets for the whole table.",
    cover: "/buffetmenu/b1.jpg",
    images: ["/buffetmenu/b1.jpg", "/buffetmenu/b2.jpg", "/buffetmenu/b3.jpg"],
  },
  {
    key: "bar",
    title: "The Sea Secret Bar Menu",
    subtitle: "Crafted cocktails and coastal pours.",
    cover: "/barmenu/bar1.jpg",
    images: [
      "/barmenu/bar1.jpg",
      "/barmenu/bar2.jpg",
      "/barmenu/bar3.jpg",
      "/barmenu/bar4.jpg",
      "/barmenu/bar5.jpg",
      "/barmenu/bar6.jpg",
      "/barmenu/bar7.jpg",
      "/barmenu/bar8.jpg",
    ],
  },
];

export function MenuGallery() {
  const [selectedSection, setSelectedSection] = useState(menuSections[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openSection = (section: (typeof menuSections)[number]) => {
    setSelectedSection(section);
    setSelectedImage(section.images[0]);
  };

  const currentIndex = selectedImage
    ? selectedSection.images.indexOf(selectedImage)
    : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < selectedSection.images.length - 1;

  const showPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (hasPrev) setSelectedImage(selectedSection.images[currentIndex - 1]);
  };

  const showNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (hasNext) setSelectedImage(selectedSection.images[currentIndex + 1]);
  };

  return (
    <>
      <div className="menu-gallery-grid">
        {menuSections.map((section) => (
          <button
            type="button"
            className="menu-gallery-card"
            key={section.key}
            onClick={() => openSection(section)}
            aria-label={`View ${section.title}`}
          >
            <img src={section.cover} alt={section.title} loading="lazy" />
            <span>
              <strong>{section.title}</strong>
              <small>{section.subtitle}</small>
              <ArrowRight size={16} />
            </span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedSection.title}
          onClick={() => setSelectedImage("")}
        >
          <div
            className="lightbox-gallery"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox-close"
              type="button"
              onClick={() => setSelectedImage("")}
              aria-label="Close image"
            >
              <X size={22} />
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              onClick={showPrev}
              disabled={!hasPrev}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="lightbox-nav lightbox-next"
              type="button"
              onClick={showNext}
              disabled={!hasNext}
            >
              <ChevronRight size={28} />
            </button>

            <button
              className="lightbox-close"
              type="button"
              onClick={() => setSelectedImage("")}
            >
              <X size={24} />
            </button>
            <img src={selectedImage} alt={`${selectedSection.title} preview`} />
            <div className="lightbox-caption">
              <strong>{selectedSection.title}</strong>
              <span>{`${currentIndex + 1} of ${selectedSection.images.length}`}</span>
            </div>
            <div className="lightbox-thumbs">
              {selectedSection.images.map((image) => (
                <button
                  type="button"
                  key={image}
                  className={image === selectedImage ? "active" : ""}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View image ${image}`}
                >
                  <img src={image} alt="Menu thumbnail" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

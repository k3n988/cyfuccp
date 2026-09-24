"use client";

import { useEffect, useState } from "react";
import { Photo, SectionHeading } from "../ui";
import { X } from "lucide-react";
import { imageUrls } from "../../data/site-content";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveImage(null); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return <section className="section gallery" id="gallery">
    <SectionHeading eyebrow="GALLERY" title="Community Moments" detail="Real people. Real faith. Real stories." />
    <div className="gallery-grid">
      {imageUrls.gallery.map((src, index) => <button className="gallery-item" type="button" key={`${src}-${index}`} onClick={() => setActiveImage(src)} aria-label={`Open community moment ${index + 1}`}>
        <Photo src={src} alt={`Community moment ${index + 1}`} />
      </button>)}
    </div>
    {activeImage && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Full-screen gallery image" onClick={() => setActiveImage(null)}>
      <button className="gallery-close" type="button" aria-label="Close full-screen image" onClick={() => setActiveImage(null)}><X size={28} /></button>
      <img src={activeImage} alt="Full-screen community moment" onClick={(event) => event.stopPropagation()} />
    </div>}
  </section>;
}

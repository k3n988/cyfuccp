"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Photo, SectionHeading } from "../ui";
import { X } from "lucide-react";
import { imageUrls } from "../../data/site-content";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!activeImage) return;
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [activeImage]);

  return <section className="section gallery" id="gallery">
    <SectionHeading eyebrow="GALLERY" title="Community Moments" detail="Real people. Real faith. Real stories." />
    <div className="gallery-grid">
      {imageUrls.gallery.map((src, index) => <button className="gallery-item" type="button" key={`${src}-${index}`} onClick={() => setActiveImage(src)} aria-label={`Open community moment ${index + 1}`}>
        <Photo src={src} alt={`Community moment ${index + 1}`} />
      </button>)}
    </div>
    <dialog ref={dialogRef} className="gallery-lightbox" aria-label="Full-screen gallery image" onCancel={() => setActiveImage(null)} onClick={(event) => { if (event.target === event.currentTarget) setActiveImage(null); }}>
      <button className="gallery-close" type="button" autoFocus aria-label="Close full-screen image" onClick={() => setActiveImage(null)}><X size={28} /></button>
      {activeImage && <div className="gallery-lightbox-image"><Image src={activeImage} alt={`Community moment ${imageUrls.gallery.indexOf(activeImage) + 1}`} fill sizes="100vw" style={{ objectFit: "contain" }} /></div>}
    </dialog>
  </section>;
}

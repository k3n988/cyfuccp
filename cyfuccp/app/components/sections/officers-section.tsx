"use client";

import { useEffect, useRef } from "react";
import { Photo, SectionHeading } from "../ui";
import { imageUrls, officers } from "../../data/site-content";

export function OfficersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let pendingScroll = 0;
    let dragFrame = 0;
    const animate = () => {
      if (!isPausedRef.current && track.scrollWidth > track.clientWidth) {
        track.scrollLeft += 1;
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) track.scrollLeft = 0;
      }
      frame = requestAnimationFrame(animate);
    };
    const onPointerDown = (event: globalThis.PointerEvent) => {
      dragging = true;
      isPausedRef.current = true;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event: globalThis.PointerEvent) => {
      if (!dragging) return;
      if (event.cancelable) event.preventDefault();
      pendingScroll = startScroll - (event.clientX - startX);
      if (!dragFrame) {
        dragFrame = requestAnimationFrame(() => {
          track.scrollLeft = pendingScroll;
          dragFrame = 0;
        });
      }
    };
    const onPointerUp = (event: globalThis.PointerEvent) => {
      dragging = false;
      isPausedRef.current = false;
      if (dragFrame) {
        cancelAnimationFrame(dragFrame);
        track.scrollLeft = pendingScroll;
        dragFrame = 0;
      }
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    };
    const pointerMoveOptions: AddEventListenerOptions = { passive: false };
    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove, pointerMoveOptions);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);
    const delay = window.setTimeout(animate, 3000);
    return () => {
      window.clearTimeout(delay);
      cancelAnimationFrame(frame);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove, pointerMoveOptions);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return <section className="officers" id="officers"><div className="section">
    <SectionHeading eyebrow="OUR LEADERSHIP" title="CYF Officers 2026-2027" detail="Young leaders, faithful servants, building a brighter tomorrow." />
    <div className="officer-grid" ref={trackRef}>
      {officers.map(([role, name], index) => <article className="officer-card" key={role}>
        <Photo src={imageUrls.officers[index]} alt={`${role} - ${name}`} />
        <span>{role}</span><strong>{name}</strong>
      </article>)}
    </div>
  </div></section>;
}

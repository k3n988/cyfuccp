import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/sections/hero";
import { AboutSection } from "./components/sections/about-section";
import { MinistriesSection } from "./components/sections/ministries-section";
import { OfficersSection } from "./components/sections/officers-section";
import { EventsSection } from "./components/sections/events-section";
import { GallerySection } from "./components/sections/gallery-section";
import { TestimonialSection } from "./components/sections/testimonial-section";
import { VisitSection } from "./components/sections/visit-section";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return <main><SiteHeader /><Hero /><AboutSection /><MinistriesSection /><OfficersSection /><EventsSection /><GallerySection /><TestimonialSection /><VisitSection /><SiteFooter /></main>;
}

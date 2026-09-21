import { ArrowRight, Photo, SectionHeading } from "../ui";
import { imageUrls } from "../../data/site-content";
export function GallerySection() { return <section className="section gallery" id="gallery"><SectionHeading eyebrow="GALLERY" title="Community Moments" detail="Real people. Real faith. Real stories."/><div className="gallery-grid">{imageUrls.gallery.map((src, index) => <Photo key={`${src}-${index}`} src={src} alt={`Community moment ${index + 1}`}/>)}</div><a href="#gallery" className="text-link align-right">View More Photos <ArrowRight size={15}/></a></section>; }

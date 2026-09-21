import { ArrowRight, Heart, Music2, BookOpen, Users, CalendarDays, MapPin, Mail, Phone, Quote, Cross, Clock3 } from "lucide-react";
export const iconFor = (name: string) => ({ book: BookOpen, music: Music2, heart: Heart, users: Users }[name] ?? Heart);
export { ArrowRight, Heart, Music2, BookOpen, Users, CalendarDays, MapPin, Mail, Phone, Quote, Cross, Clock3 };
export function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) { return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{detail && <p>{detail}</p>}</div>; }
export function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) { return <div className={`photo ${className}`} style={{ backgroundImage: `url("${src}")` }} role="img" aria-label={alt}/>; }

import { CalendarDays, Mail, MapPin, Phone } from "../ui";

const mapQuery = "UCCP Bacolod, Bacolod City, Negros Occidental";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export function VisitSection() {
  return <section className="visit" id="contact">
    <div className="section visit-grid">
      <div className="visit-copy">
        <span className="eyebrow">VISIT US</span>
        <h2>Let&apos;s Stay Connected</h2>
        <p>We&apos;d love to have you with us! Join our fellowship, attend our activities, or simply reach out. You are always welcome at UCCP Bacolod.</p>
        <a className="contact-line contact-link" href={mapsUrl} target="_blank" rel="noreferrer">
          <MapPin size={18} /><span>United Church of Christ in the Philippines<br />Bacolod City, Negros Occidental</span>
        </a>
        <a className="contact-line contact-link" href="tel:+639677636739"><Phone size={18} /><span>09677636739</span></a>
        <a className="contact-line contact-link" href="mailto:cyf.uccpbacolod@gmail.com"><Mail size={18} /><span>cyf.uccpbacolod@gmail.com</span></a>
      </div>

      <div className="schedule-card">
        <CalendarDays size={25} />
        <h3>Fellowship Schedule</h3>
        <div><span>Sunday Worship Service</span><b>9:00 AM</b></div>
        <div><span>CYF Fellowship<br />(Every Saturday)</span><b>3:00 PM</b></div>
        <div><span>Bible Study<br />(Every Saturday)</span><b>4:00 PM</b></div>
      </div>

      <div className="map-card">
        <iframe title="UCCP Bacolod map" src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <a className="map-label" href={mapsUrl} target="_blank" rel="noreferrer"><strong>UCCP Bacolod</strong><span>Bacolod City</span></a>
      </div>
    </div>
  </section>;
}

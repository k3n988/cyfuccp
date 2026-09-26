import { ArrowRight, CalendarDays, MapPin, SectionHeading, Photo } from "../ui";
import { imageUrls } from "../../data/site-content";
import Image from "next/image";

const upcomingEvents = [
  ["Bible Study Fellowship", imageUrls.bible, "Sep 6, 2026", "4:00 PM"],
  ["Community Outreach", imageUrls.outreach, "Sep 20, 2026", "8:00 AM"],
  ["CYF Fellowship Day", imageUrls.worship, "Oct 4, 2026", "3:00 PM"],
] as const;

export function EventsSection() {
  return <section className="section events" id="events">
    <SectionHeading eyebrow="EVENTS & ANNOUNCEMENTS" title="What’s Happening" detail="Join us in our upcoming activities and be part of what God is doing!" />
    <div className="event-grid">
      <article className="featured-event" style={{ position: "relative", isolation: "isolate", overflow: "hidden" }}>
        <Image src={imageUrls.worship} alt="" fill sizes="(max-width: 620px) 90vw, 50vw" style={{ objectFit: "cover", zIndex: -2 }} />
        <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(20,25,55,.93), rgba(20,25,55,.34))", zIndex: -1 }} />
        <span className="event-tag">✦ FEATURED</span>
        <div>
          <h3>Youth Worship Night</h3>
          <p>◷ &nbsp;Aug 30, 2026 &nbsp; | &nbsp; ◷ &nbsp;6:00 PM<br />⌖ &nbsp; UCCP Bacolod</p>
          <small>A night of praise, prayer and renewed purpose.<br />All are welcome!</small>
          <a className="featured-event-link" href="#events">View Details <ArrowRight size={14} /></a>
        </div>
      </article>
      <div className="event-cards-row">
        {upcomingEvents.map(([title, image, date, time]) => <article className="event-card" key={title}>
          <Photo src={image} alt={title} />
          <div>
            <h3>{title}</h3>
            <p><CalendarDays size={13} /> {date}<br /><span>◷ &nbsp;{time}</span><br /><MapPin size={13} /> UCCP Bacolod</p>
            <span className="event-card-arrow" aria-hidden="true"><ArrowRight size={16} /></span>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

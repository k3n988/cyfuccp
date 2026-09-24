import Image from "next/image";
import { ArrowRight, CalendarDays, Heart, Music2, Users } from "../ui";
import { imageUrls } from "../../data/site-content";

export function Hero() {
  return <section className="hero hero-final" id="home">
    <div className="hero-final__content">
      <div className="hero-final__copy">
        <span className="eyebrow">UNITED IN CHRIST. EMPOWERED TO SERVE.</span>
        <h1>Growing in Faith,<br /><em>Love,</em> and Fellowship</h1>
        <p>Christian Youth Fellowship – UCCP Bacolod is a community of young people journeying together in faith, worship, service and friendship, for a brighter tomorrow in Christ.</p>
        <div className="hero-actions">
          <a href="#contact" className="button button-pink"><Users size={22} /> Join the Community <ArrowRight size={14} /></a>
          <a href="#events" className="button button-outline"><CalendarDays size={22} /> View Events</a>
        </div>
        <blockquote>&quot;For where two or three gather in my name,<br />there am I with them.&quot;<span>— Matthew 18:20</span></blockquote>
        <div className="hero-support" aria-label="What we do">
          <span><Music2 size={16} aria-hidden="true" /> Worship</span>
          <span><Heart size={16} aria-hidden="true" /> Fellowship</span>
          <span><CalendarDays size={16} aria-hidden="true" /> Youth Events</span>
        </div>
      </div>
    </div>
    <div className="hero-final__visual">
      <Image src={imageUrls.hero} alt="Christian Youth Fellowship group gathered at UCCP Bacolod" fill priority sizes="(max-width: 1023px) 100vw, 50vw" />
      <div className="hero-badge"><strong>Youth for Christ</strong><span>A Brighter Tomorrow</span><small>UCCP BACOLOD <i>♡</i></small></div>
    </div>
  </section>;
}

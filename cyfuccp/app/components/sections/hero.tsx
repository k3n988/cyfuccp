import Image from "next/image";
import { ArrowRight, CalendarDays, Users } from "../ui";
import { imageUrls } from "../../data/site-content";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-stage">
        <div className="hero-visual">
          <Image
            src={imageUrls.hero}
            alt="Christian Youth Fellowship group gathered at UCCP Bacolod"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 840px"
          />
          <div className="hero-badge">
            <strong>Youth for Christ</strong>
            <span>A Brighter Tomorrow</span>
            <small>UCCP BACOLOD <i>&#9825;</i></small>
          </div>
        </div>

        <span className="hero-brush hero-brush-one" aria-hidden="true" />
        <span className="hero-brush hero-brush-two" aria-hidden="true" />
        <span className="hero-heart" aria-hidden="true">&#9825;</span>

        <div className="hero-container">
          <div className="hero-content">
            <span className="eyebrow">UNITED IN CHRIST. EMPOWERED TO SERVE.</span>
            <h1>Growing in Faith,<br /><em>Love,</em> and Fellowship</h1>
            <p>Christian Youth Fellowship &ndash; UCCP Bacolod is a community of young people journeying together in faith, worship, service and friendship, for a brighter tomorrow in Christ.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-pink"><Users size={22} /> Join the Community <ArrowRight size={14} /></a>
              <a href="#events" className="button button-outline"><CalendarDays size={22} /> View Events</a>
            </div>
            <blockquote>&quot;For where two or three gather in my name,<br />there am I with them.&quot;<span>&mdash; Matthew 18:20</span></blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

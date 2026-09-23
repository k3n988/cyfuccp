import Image from "next/image";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-brand"><Image className="brand-logo" src="/logo.jpg" alt="Christian Youth Fellowship UCCP Bacolod logo" width={56} height={56}/><span><strong>Christian Youth Fellowship</strong><small>UCCP Bacolod</small></span></div>
    <p>Faith · Fellowship · Service · A Brighter Tomorrow</p>
    <div className="footer-links">
      <div><strong>Quick Links</strong><a href="#events">Events</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div>
      <div><strong>Follow Us</strong><span className="socials"><a className="facebook-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg></a></span></div>
    </div>
    <span className="footer-note">© 2025 Christian Youth Fellowship – UCCP Bacolod. All rights reserved.</span>
  </footer>;
}

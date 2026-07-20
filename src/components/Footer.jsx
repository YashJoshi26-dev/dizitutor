import { Link } from "react-router-dom";
import { socialLinks } from "../data/socialLinks.js";
import { socialIconMap } from "./SocialIcons.jsx";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/images/logo.png" alt="Dizitutor" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">
            Live, personalised tutoring from India's best teachers — book a demo and see the difference.
          </p>
        </div>

        <div className="footer-contact">
          <h2>Contact</h2>
          <a href="mailto:admin@diziveera.com"> admin@dizitutor.com</a>
          <a href="tel:+916262615157">+91 62626 15157</a>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="footer-social-icons">
            {socialLinks.map(({ name, href }) => {
              const Icon = socialIconMap[name];
              return (
                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Dizitutor. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;